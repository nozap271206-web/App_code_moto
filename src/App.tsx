import { useEffect, useMemo, useState } from 'react';
import { QUESTIONS } from './data/questions';
import { QUESTIONS_VOITURE } from './data/questions_voiture';
import { QUESTIONS_PL } from './data/questions_poids_lourds';
import { QUESTIONS_BATEAU } from './data/questions_bateau';
import { THEMES, themesFor, type Answer, type License, type Question, type Theme, type ThemeStat } from './types';
import { Sign } from './components/Signs';

type Screen =
  | { name: 'discipline' }
  | { name: 'home' }
  | { name: 'theme-pick'; mode: 'train' }
  | { name: 'exam-config' }
  | { name: 'quiz'; questions: Question[]; mode: 'train' | 'exam'; title: string; chrono: boolean }
  | { name: 'results'; answers: Answer[]; questions: Question[]; mode: 'train' | 'exam'; title: string }
  | { name: 'review-errors' }
  | { name: 'stats' }
  | { name: 'ai-assistant' };

const CHRONO_SECONDS = 20;
const EXAM_SIZE = 40;
const EXAM_MAX_ERRORS = 5;
const LIC_KEY = 'codemoto.license.v1';
const AI_KEY = 'codemoto.gemini-key.v1';

const errKey = (lic: License) => `codemoto.errors.${lic}.v1`;
const statsKey = (lic: License) => `codemoto.stats.${lic}.v1`;

const LICENSE_META: Record<License, { title: string; emoji: string; accent: string; border: string }> = {
  moto:           { title: 'Code moto (ETM)',      emoji: '🏍️', accent: 'text-amber-400',  border: 'hover:border-amber-500' },
  voiture:        { title: 'Code voiture (ETG)',   emoji: '🚗',  accent: 'text-sky-400',    border: 'hover:border-sky-500' },
  'poids-lourds': { title: 'Permis poids lourds',  emoji: '🚚',  accent: 'text-orange-400', border: 'hover:border-orange-500' },
  bateau:         { title: 'Permis côtier',         emoji: '⛵',  accent: 'text-teal-400',   border: 'hover:border-teal-500' },
};

function bankFor(lic: License): Question[] {
  if (lic === 'moto') return QUESTIONS;
  if (lic === 'voiture') return QUESTIONS_VOITURE;
  if (lic === 'poids-lourds') return QUESTIONS_PL;
  return QUESTIONS_BATEAU;
}

function loadErrors(lic: License): Record<string, number> {
  try { return JSON.parse(localStorage.getItem(errKey(lic)) || '{}'); } catch { return {}; }
}
function saveErrors(lic: License, e: Record<string, number>) {
  localStorage.setItem(errKey(lic), JSON.stringify(e));
}
function emptyStats(): Record<Theme, ThemeStat> {
  return Object.fromEntries((Object.keys(THEMES) as Theme[]).map(t => [t, { attempts: 0, correct: 0 }])) as Record<Theme, ThemeStat>;
}
function loadStats(lic: License): Record<Theme, ThemeStat> {
  try {
    const stored = JSON.parse(localStorage.getItem(statsKey(lic)) || '{}');
    return { ...emptyStats(), ...stored };
  } catch { return emptyStats(); }
}
function saveStats(lic: License, s: Record<Theme, ThemeStat>) {
  localStorage.setItem(statsKey(lic), JSON.stringify(s));
}

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function arraysEqual(a: number[], b: number[]) {
  if (a.length !== b.length) return false;
  const sa = [...a].sort(), sb = [...b].sort();
  return sa.every((v, i) => v === sb[i]);
}

export default function App() {
  const [license, setLicense] = useState<License | null>(() => {
    const v = localStorage.getItem(LIC_KEY);
    return v === 'moto' || v === 'voiture' || v === 'poids-lourds' || v === 'bateau' ? (v as License) : null;
  });
  const [screen, setScreen] = useState<Screen>(() => license ? { name: 'home' } : { name: 'discipline' });

  useEffect(() => {
    if (license) localStorage.setItem(LIC_KEY, license);
  }, [license]);

  const bank = license ? bankFor(license) : [];
  const errorStore = useMemo(() => license ? loadErrors(license) : {}, [screen.name, license]);
  const meta = license ? LICENSE_META[license] : null;

  function switchLicense() {
    setLicense(null);
    setScreen({ name: 'discipline' });
  }

  if (!license || screen.name === 'discipline') {
    return (
      <div className="min-h-full max-w-2xl mx-auto px-4 py-6">
        <DisciplinePick
          onPick={(l) => {
            setLicense(l);
            setScreen({ name: 'home' });
          }}
        />
      </div>
    );
  }

  return (
    <div className="min-h-full max-w-2xl mx-auto px-4 py-6">
      <header className="flex items-center justify-between mb-6 gap-2">
        <button
          onClick={() => setScreen({ name: 'home' })}
          className={`${meta!.accent} font-bold text-xl tracking-tight text-left`}
        >
          {meta!.emoji} {meta!.title}
        </button>
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400">{bank.length} questions</span>
          <button
            onClick={switchLicense}
            className="text-xs px-2 py-1 rounded border border-slate-700 hover:border-slate-500"
            title="Changer de section"
          >
            Changer
          </button>
        </div>
      </header>

      {screen.name === 'home' && (
        <Home
          license={license}
          errorCount={Object.keys(errorStore).length}
          onTrain={() => setScreen({ name: 'theme-pick', mode: 'train' })}
          onExam={() => setScreen({ name: 'exam-config' })}
          onReview={() => setScreen({ name: 'review-errors' })}
          onStats={() => setScreen({ name: 'stats' })}
          onAI={() => setScreen({ name: 'ai-assistant' })}
        />
      )}

      {screen.name === 'theme-pick' && (
        <ThemePick
          bank={bank}
          license={license}
          onPick={(t) => {
            const qs = shuffle(bank.filter(q => q.theme === t));
            setScreen({ name: 'quiz', questions: qs, mode: 'train', title: `Thème ${t} — ${THEMES[t].short}`, chrono: false });
          }}
          onAll={() => {
            const qs = shuffle(bank);
            setScreen({ name: 'quiz', questions: qs, mode: 'train', title: 'Entraînement libre — tous thèmes', chrono: false });
          }}
          onBack={() => setScreen({ name: 'home' })}
        />
      )}

      {screen.name === 'exam-config' && (
        <ExamConfig
          examSize={Math.min(EXAM_SIZE, bank.length)}
          onStart={(chrono) => {
            const qs = shuffle(bank).slice(0, Math.min(EXAM_SIZE, bank.length));
            setScreen({ name: 'quiz', questions: qs, mode: 'exam', title: `Examen blanc (${qs.length} questions)`, chrono });
          }}
          onBack={() => setScreen({ name: 'home' })}
        />
      )}

      {screen.name === 'quiz' && (
        <Quiz
          questions={screen.questions}
          mode={screen.mode}
          title={screen.title}
          chrono={screen.chrono}
          onDone={(answers) => {
            const nextErr = { ...errorStore };
            for (const a of answers) {
              if (!a.correct) nextErr[a.questionId] = (nextErr[a.questionId] || 0) + 1;
              else if (nextErr[a.questionId]) delete nextErr[a.questionId];
            }
            saveErrors(license, nextErr);
            const stats = loadStats(license);
            for (const a of answers) {
              const q = screen.questions.find(x => x.id === a.questionId)!;
              stats[q.theme].attempts += 1;
              if (a.correct) stats[q.theme].correct += 1;
            }
            saveStats(license, stats);
            setScreen({ name: 'results', answers, questions: screen.questions, mode: screen.mode, title: screen.title });
          }}
          onAbort={() => setScreen({ name: 'home' })}
        />
      )}

      {screen.name === 'results' && (
        <Results
          {...screen}
          onHome={() => setScreen({ name: 'home' })}
          onRetry={() => {
            const wrongIds = new Set(screen.answers.filter(a => !a.correct).map(a => a.questionId));
            const qs = screen.questions.filter(q => wrongIds.has(q.id));
            if (qs.length === 0) setScreen({ name: 'home' });
            else setScreen({ name: 'quiz', questions: shuffle(qs), mode: 'train', title: 'Reprise des erreurs', chrono: false });
          }}
        />
      )}

      {screen.name === 'review-errors' && (
        <ReviewErrors
          bank={bank}
          errors={errorStore}
          onStart={(qs) => setScreen({ name: 'quiz', questions: shuffle(qs), mode: 'train', title: 'Révision des erreurs', chrono: false })}
          onClear={() => { saveErrors(license, {}); setScreen({ name: 'home' }); }}
          onBack={() => setScreen({ name: 'home' })}
        />
      )}

      {screen.name === 'stats' && (
        <Stats
          license={license}
          onBack={() => setScreen({ name: 'home' })}
          onReset={() => { localStorage.removeItem(statsKey(license)); setScreen({ name: 'home' }); }}
        />
      )}

      {screen.name === 'ai-assistant' && (
        <AIAssistant
          license={license}
          onBack={() => setScreen({ name: 'home' })}
        />
      )}

      <footer className="mt-10 text-center text-xs text-slate-500">
        Banque de questions à titre éducatif. Vérifiez les règles en vigueur sur les sites officiels (securite-routiere.gouv.fr, shom.fr).
      </footer>
    </div>
  );
}

const DISCIPLINE_INFO: Record<License, { sub: string; detail: string }> = {
  moto:           { sub: 'Code moto · ETM',         detail: '9 thèmes · ~150 Q · panneaux routiers' },
  voiture:        { sub: 'Code voiture · ETG',       detail: '9 thèmes · ~137 Q · permis B' },
  'poids-lourds': { sub: 'CQC / FIMO poids lourds', detail: '9 thèmes · tachygraphe · ADR · freinage' },
  bateau:         { sub: 'Permis côtier plaisance',  detail: '5 thèmes · balisage AISM · RIPAM · météo' },
};

function DisciplinePick({ onPick }: { onPick: (l: License) => void }) {
  const licenses: License[] = ['moto', 'voiture', 'poids-lourds', 'bateau'];
  return (
    <div className="space-y-6 pt-8">
      <div>
        <h1 className="text-3xl font-bold">Réviser le code</h1>
        <p className="text-slate-400 text-sm mt-1">Choisis la catégorie de permis que tu prépares.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {licenses.map(lic => {
          const m = LICENSE_META[lic];
          const d = DISCIPLINE_INFO[lic];
          return (
            <button
              key={lic}
              onClick={() => onPick(lic)}
              className={`text-left p-5 rounded-2xl bg-slate-900 border border-slate-800 ${m.border} transition`}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl mt-0.5">{m.emoji}</div>
                <div>
                  <div className={`${m.accent} font-bold text-base leading-tight`}>{d.sub}</div>
                  <div className="text-xs text-slate-400 mt-1">{d.detail}</div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <p className="text-xs text-slate-500 pt-2">
        Erreurs et statistiques enregistrées séparément pour chaque catégorie.
      </p>
    </div>
  );
}

const HOME_NAMES: Record<License, string> = {
  moto: 'code moto',
  voiture: 'code voiture',
  'poids-lourds': 'permis poids lourds',
  bateau: 'permis côtier',
};

function Home({ license, errorCount, onTrain, onExam, onReview, onStats, onAI }: {
  license: License;
  errorCount: number;
  onTrain: () => void;
  onExam: () => void;
  onReview: () => void;
  onStats: () => void;
  onAI: () => void;
}) {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold">
        Révise ton {HOME_NAMES[license]}
      </h1>
      <p className="text-slate-400 text-sm">
        Entraînement par thème, examen blanc ({EXAM_SIZE} questions, ≤ {EXAM_MAX_ERRORS} erreurs), carnet d'erreurs et statistiques.
      </p>
      <div className="grid gap-3 mt-4">
        <Tile title="Entraînement" subtitle="Par thème ou tous mélangés" onClick={onTrain} accent="bg-amber-500" />
        <Tile title="Examen blanc" subtitle={`${EXAM_SIZE} questions, mode chrono optionnel`} onClick={onExam} accent="bg-rose-500" />
        <Tile
          title="Mes erreurs"
          subtitle={errorCount === 0 ? 'Aucune erreur enregistrée' : `${errorCount} question(s) à revoir`}
          onClick={onReview}
          accent="bg-sky-500"
          disabled={errorCount === 0}
        />
        <Tile title="Statistiques" subtitle="Taux de réussite par thème" onClick={onStats} accent="bg-emerald-500" />
        <Tile title="Assistant IA" subtitle="Pose tes questions à Gemini (clé API gratuite)" onClick={onAI} accent="bg-violet-500" />
      </div>
    </div>
  );
}

function Tile({ title, subtitle, onClick, accent, disabled }: {
  title: string; subtitle: string; onClick: () => void; accent: string; disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="text-left p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-600 transition disabled:opacity-40 disabled:cursor-not-allowed"
    >
      <div className="flex items-center gap-3">
        <span className={`w-2 h-10 rounded ${accent}`}></span>
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-xs text-slate-400">{subtitle}</div>
        </div>
      </div>
    </button>
  );
}

function ThemePick({ bank, license, onPick, onAll, onBack }: { bank: Question[]; license: License; onPick: (t: Theme) => void; onAll: () => void; onBack: () => void }) {
  const themes = themesFor(license);
  const meta = LICENSE_META[license];
  return (
    <div className="space-y-3">
      <button onClick={onBack} className="text-xs text-slate-400">← retour</button>
      <h2 className="text-xl font-bold">Choisis un thème</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {(Object.keys(themes) as Theme[]).map(t => {
          const info = themes[t]!;
          const count = bank.filter(q => q.theme === t).length;
          return (
            <button
              key={t}
              onClick={() => onPick(t)}
              disabled={count === 0}
              className={`text-left p-3 rounded-lg bg-slate-900 border border-slate-800 ${meta.border} disabled:opacity-40`}
            >
              <div className="flex items-baseline justify-between">
                <span className={`font-bold ${meta.accent}`}>{t}</span>
                <span className="text-xs text-slate-500">{count} Q</span>
              </div>
              <div className="text-sm">{info.short}</div>
              <div className="text-xs text-slate-500">{info.label}</div>
            </button>
          );
        })}
      </div>
      <button onClick={onAll} className={`w-full p-3 rounded-lg font-semibold mt-3 ${license === 'bateau' ? 'bg-teal-500' : license === 'poids-lourds' ? 'bg-orange-500' : license === 'voiture' ? 'bg-sky-500' : 'bg-amber-500'} text-slate-950`}>
        Tous les thèmes mélangés
      </button>
    </div>
  );
}

function ExamConfig({ examSize, onStart, onBack }: { examSize: number; onStart: (chrono: boolean) => void; onBack: () => void }) {
  return (
    <div className="space-y-4">
      <button onClick={onBack} className="text-xs text-slate-400">← retour</button>
      <h2 className="text-xl font-bold">Examen blanc</h2>
      <p className="text-sm text-slate-400">
        {examSize} questions tirées au hasard. Seuil de réussite : <span className="text-amber-400 font-semibold">≤ {EXAM_MAX_ERRORS} erreurs</span>.
      </p>
      <div className="space-y-2">
        <button
          onClick={() => onStart(false)}
          className="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500 text-left"
        >
          <div className="font-semibold">Mode classique</div>
          <div className="text-xs text-slate-400">Sans limite de temps par question.</div>
        </button>
        <button
          onClick={() => onStart(true)}
          className="w-full p-4 rounded-xl bg-slate-900 border border-rose-700 hover:border-rose-500 text-left"
        >
          <div className="font-semibold">Mode chrono (réaliste)</div>
          <div className="text-xs text-slate-400">{CHRONO_SECONDS} s par question, validation automatique à 0.</div>
        </button>
      </div>
    </div>
  );
}

function Quiz({ questions, mode, title, chrono, onDone, onAbort }: {
  questions: Question[]; mode: 'train' | 'exam'; title: string; chrono: boolean;
  onDone: (a: Answer[]) => void; onAbort: () => void;
}) {
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [validated, setValidated] = useState(false);
  const [timeLeft, setTimeLeft] = useState(CHRONO_SECONDS);

  const q = questions[i];
  const multi = q.correct.length > 1;
  const useChrono = chrono && mode === 'exam';

  useEffect(() => {
    setTimeLeft(CHRONO_SECONDS);
  }, [i]);

  useEffect(() => {
    if (!useChrono) return;
    if (timeLeft <= 0) {
      const correct = arraysEqual(selected, q.correct) && selected.length > 0;
      const all = [...answers, { questionId: q.id, selected, correct }];
      if (i + 1 >= questions.length) onDone(all);
      else { setAnswers(all); setI(i + 1); setSelected([]); }
      return;
    }
    const t = setTimeout(() => setTimeLeft(s => s - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, useChrono]);

  function toggle(idx: number) {
    if (validated) return;
    if (multi) {
      setSelected(s => s.includes(idx) ? s.filter(v => v !== idx) : [...s, idx]);
    } else {
      setSelected([idx]);
    }
  }

  function validate() {
    if (selected.length === 0) return;
    const correct = arraysEqual(selected, q.correct);
    const a: Answer = { questionId: q.id, selected, correct };
    if (mode === 'exam') {
      const all = [...answers, a];
      if (i + 1 >= questions.length) onDone(all);
      else { setAnswers(all); setI(i + 1); setSelected([]); }
    } else {
      setAnswers([...answers, a]);
      setValidated(true);
    }
  }

  function next() {
    setValidated(false);
    setSelected([]);
    if (i + 1 >= questions.length) onDone(answers);
    else setI(i + 1);
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <button onClick={onAbort} className="text-xs text-slate-400">← quitter</button>
        <span className="text-xs text-slate-400">{title} · {i + 1} / {questions.length}</span>
      </div>
      <div className="w-full h-1 bg-slate-800 rounded">
        <div className="h-1 bg-amber-500 rounded transition-all" style={{ width: `${((i + 1) / questions.length) * 100}%` }} />
      </div>

      {useChrono && (
        <div className="flex items-center gap-2">
          <div className="flex-1 h-2 bg-slate-800 rounded overflow-hidden">
            <div
              className={`h-2 transition-all ${timeLeft <= 5 ? 'bg-rose-500' : 'bg-emerald-500'}`}
              style={{ width: `${(timeLeft / CHRONO_SECONDS) * 100}%` }}
            />
          </div>
          <span className={`text-sm font-mono ${timeLeft <= 5 ? 'text-rose-400' : 'text-slate-300'}`}>{timeLeft}s</span>
        </div>
      )}

      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
        <div className="text-xs text-amber-400 mb-1">Thème {q.theme} {multi && '· plusieurs bonnes réponses'}</div>

        {q.sign && (
          <div className="flex justify-center my-3">
            <div className="bg-white p-3 rounded-lg border border-slate-800">
              <Sign k={q.sign} size={120} />
            </div>
          </div>
        )}

        <div className="font-semibold mb-4">{q.prompt}</div>
        <div className="space-y-2">
          {q.choices.map((c, idx) => {
            const isSel = selected.includes(idx);
            const isCorrect = q.correct.includes(idx);
            let cls = 'border-slate-700 bg-slate-950 hover:border-slate-500';
            if (validated) {
              if (isCorrect) cls = 'border-emerald-500 bg-emerald-500/10';
              else if (isSel && !isCorrect) cls = 'border-rose-500 bg-rose-500/10';
              else cls = 'border-slate-800 bg-slate-950 opacity-60';
            } else if (isSel) {
              cls = 'border-amber-500 bg-amber-500/10';
            }
            return (
              <button
                key={idx}
                onClick={() => toggle(idx)}
                className={`w-full text-left p-3 rounded-lg border transition ${cls}`}
              >
                <span className="font-mono text-xs text-slate-400 mr-2">{String.fromCharCode(65 + idx)}.</span>
                {c}
              </button>
            );
          })}
        </div>

        {validated && (
          <div className="mt-4 p-3 rounded bg-slate-950 border border-slate-800 text-sm">
            <div className={`font-semibold mb-1 ${answers[answers.length - 1].correct ? 'text-emerald-400' : 'text-rose-400'}`}>
              {answers[answers.length - 1].correct ? '✓ Bonne réponse' : '✗ Mauvaise réponse'}
            </div>
            <div className="text-slate-300">{q.explanation}</div>
          </div>
        )}
      </div>

      {!validated ? (
        <button
          onClick={validate}
          disabled={selected.length === 0}
          className="w-full p-3 rounded-lg bg-amber-500 text-slate-950 font-semibold disabled:opacity-40"
        >
          {mode === 'exam' ? (i + 1 === questions.length ? 'Terminer' : 'Question suivante') : 'Valider'}
        </button>
      ) : (
        <button onClick={next} className="w-full p-3 rounded-lg bg-amber-500 text-slate-950 font-semibold">
          {i + 1 === questions.length ? 'Voir le résultat' : 'Question suivante'}
        </button>
      )}
    </div>
  );
}

function Results({ answers, questions, mode, title, onHome, onRetry }: {
  answers: Answer[]; questions: Question[]; mode: 'train' | 'exam'; title: string;
  onHome: () => void; onRetry: () => void;
}) {
  const good = answers.filter(a => a.correct).length;
  const total = answers.length;
  const wrong = total - good;
  const passed = mode === 'exam' ? wrong <= EXAM_MAX_ERRORS : good === total;

  return (
    <div className="space-y-4">
      <div className="text-xs text-slate-400">{title}</div>
      <div className={`p-6 rounded-xl border ${passed ? 'border-emerald-500 bg-emerald-500/10' : 'border-rose-500 bg-rose-500/10'}`}>
        <div className="text-3xl font-bold">{good} / {total}</div>
        {mode === 'exam' ? (
          <div className="text-sm mt-1">
            {passed ? `✓ Examen réussi (≤ ${EXAM_MAX_ERRORS} erreurs)` : `✗ Examen non validé (${wrong} erreurs, max ${EXAM_MAX_ERRORS})`}
          </div>
        ) : (
          <div className="text-sm mt-1">{wrong === 0 ? 'Sans-faute !' : `${wrong} erreur(s) ajoutée(s) à ton carnet de révision.`}</div>
        )}
      </div>

      <details className="rounded-lg bg-slate-900 border border-slate-800">
        <summary className="cursor-pointer p-3 text-sm">Voir le détail</summary>
        <div className="p-3 space-y-2 text-sm">
          {answers.map((a, idx) => {
            const q = questions.find(x => x.id === a.questionId)!;
            return (
              <div key={a.questionId} className={`p-2 rounded border ${a.correct ? 'border-emerald-700' : 'border-rose-700'}`}>
                <div className="text-xs text-slate-400">#{idx + 1} · {q.theme}</div>
                <div className="font-medium">{q.prompt}</div>
                <div className="text-xs text-slate-400 mt-1">
                  Bonne réponse : {q.correct.map(i => q.choices[i]).join(' / ')}
                </div>
              </div>
            );
          })}
        </div>
      </details>

      <div className="flex gap-2">
        {wrong > 0 && (
          <button onClick={onRetry} className="flex-1 p-3 rounded-lg bg-amber-500 text-slate-950 font-semibold">
            Reprendre les erreurs
          </button>
        )}
        <button onClick={onHome} className="flex-1 p-3 rounded-lg bg-slate-800 font-semibold">
          Accueil
        </button>
      </div>
    </div>
  );
}

function ReviewErrors({ bank, errors, onStart, onClear, onBack }: {
  bank: Question[];
  errors: Record<string, number>;
  onStart: (qs: Question[]) => void;
  onClear: () => void;
  onBack: () => void;
}) {
  const qs = bank.filter(q => errors[q.id]);
  return (
    <div className="space-y-3">
      <button onClick={onBack} className="text-xs text-slate-400">← retour</button>
      <h2 className="text-xl font-bold">Tes erreurs ({qs.length})</h2>
      {qs.length === 0 ? (
        <p className="text-slate-400 text-sm">Aucune erreur enregistrée.</p>
      ) : (
        <>
          <ul className="space-y-1 text-sm">
            {qs.map(q => (
              <li key={q.id} className="p-2 rounded bg-slate-900 border border-slate-800">
                <span className="text-xs text-amber-400">{q.theme}</span> · {q.prompt}
                <span className="text-xs text-slate-500 ml-2">×{errors[q.id]}</span>
              </li>
            ))}
          </ul>
          <button onClick={() => onStart(qs)} className="w-full p-3 rounded-lg bg-amber-500 text-slate-950 font-semibold">
            Réviser ces {qs.length} question(s)
          </button>
          <button onClick={onClear} className="w-full p-2 text-xs text-slate-400 underline">
            Effacer mon carnet d'erreurs
          </button>
        </>
      )}
    </div>
  );
}

const LICENSE_CONTEXT: Record<License, string> = {
  moto: 'le code de la route moto (ETM) en France',
  voiture: 'le code de la route voiture (ETG/permis B) en France',
  'poids-lourds': 'le permis poids lourds (CQC/FIMO) en France, incluant la réglementation sociale, le tachygraphe, l\'ADR et le freinage spécifique',
  bateau: 'le permis bateau côtier (permis plaisance côtier) en France, incluant le balisage AISM, les règles COLREG/RIPAM, la météorologie maritime et la navigation',
};

type ChatMessage = { role: 'user' | 'assistant'; text: string };

async function askGemini(apiKey: string, messages: ChatMessage[], newMessage: string, license: License): Promise<string> {
  const systemPrompt = `Tu es un assistant pédagogique spécialisé dans ${LICENSE_CONTEXT[license]}. Réponds en français, de façon claire et concise. Tu peux expliquer les règles, les panneaux, les signaux, les manœuvres et les réglementations. Si la question est hors sujet, redirige poliment vers le domaine du permis.`;

  const contents = [
    ...messages.map(m => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.text }],
    })),
    { role: 'user', parts: [{ text: newMessage }] },
  ];

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: systemPrompt }] },
        contents,
        generationConfig: { maxOutputTokens: 512, temperature: 0.7 },
      }),
    }
  );

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    const msg = (err as { error?: { message?: string } }).error?.message || res.statusText;
    throw new Error(msg);
  }

  const data = await res.json() as { candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }> };
  return data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || '(Réponse vide)';
}

function AIAssistant({ license, onBack }: { license: License; onBack: () => void }) {
  const [apiKey, setApiKey] = useState(() => localStorage.getItem(AI_KEY) || '');
  const [keyInput, setKeyInput] = useState(apiKey);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const bottomRef = { current: null as HTMLDivElement | null };

  function saveKey() {
    const k = keyInput.trim();
    localStorage.setItem(AI_KEY, k);
    setApiKey(k);
    setError('');
  }

  async function send() {
    const text = input.trim();
    if (!text || !apiKey || loading) return;
    setInput('');
    setError('');
    const next: ChatMessage[] = [...messages, { role: 'user', text }];
    setMessages(next);
    setLoading(true);
    try {
      const reply = await askGemini(apiKey, messages, text, license);
      setMessages([...next, { role: 'assistant', text: reply }]);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-3 h-full">
      <button onClick={onBack} className="text-xs text-slate-400">← retour</button>
      <h2 className="text-xl font-bold">Assistant IA</h2>

      {!apiKey ? (
        <div className="space-y-3 p-4 rounded-xl bg-slate-900 border border-slate-800">
          <p className="text-sm text-slate-300">
            Connecte-toi à <span className="text-violet-400 font-semibold">Google Gemini</span> (gratuit) pour poser des questions sur ton permis.
          </p>
          <ol className="text-xs text-slate-400 space-y-1 list-decimal list-inside">
            <li>Rends-toi sur <span className="text-violet-300">aistudio.google.com</span></li>
            <li>Clique sur <em>Get API key</em> → <em>Create API key</em></li>
            <li>Copie la clé et colle-la ci-dessous</li>
          </ol>
          <input
            type="password"
            placeholder="AIza…"
            value={keyInput}
            onChange={e => setKeyInput(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm font-mono focus:outline-none focus:border-violet-500"
          />
          <button
            onClick={saveKey}
            disabled={!keyInput.trim()}
            className="w-full py-2 rounded-lg bg-violet-600 hover:bg-violet-500 disabled:opacity-40 text-sm font-semibold"
          >
            Enregistrer la clé
          </button>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Clé enregistrée · {LICENSE_CONTEXT[license].split(' ')[3] || license}</span>
            <button onClick={() => { setApiKey(''); setKeyInput(''); localStorage.removeItem(AI_KEY); }} className="underline">
              Changer la clé
            </button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-3 min-h-[200px] max-h-[380px] pr-1">
            {messages.length === 0 && (
              <p className="text-xs text-slate-500 text-center mt-8">
                Pose une question sur ton permis — règles, signaux, manœuvres…
              </p>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm whitespace-pre-wrap ${
                  m.role === 'user'
                    ? 'bg-violet-600 text-white rounded-br-sm'
                    : 'bg-slate-800 text-slate-100 rounded-bl-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 px-3 py-2 rounded-2xl rounded-bl-sm text-sm text-slate-400 animate-pulse">
                  Gemini réfléchit…
                </div>
              </div>
            )}
            {error && (
              <div className="text-xs text-rose-400 text-center p-2 bg-rose-950 rounded-lg">
                Erreur : {error}
              </div>
            )}
            <div ref={el => { bottomRef.current = el; }} />
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Ta question…"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !e.shiftKey && send()}
              disabled={loading}
              className="flex-1 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm focus:outline-none focus:border-violet-500 disabled:opacity-50"
            />
            <button
              onClick={send}
              disabled={!input.trim() || loading}
              className="px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 disabled:opacity-40 text-sm font-semibold"
            >
              Envoyer
            </button>
          </div>

          {messages.length > 0 && (
            <button
              onClick={() => setMessages([])}
              className="text-xs text-slate-500 underline text-center"
            >
              Nouvelle conversation
            </button>
          )}
        </>
      )}
    </div>
  );
}

function Stats({ license, onBack, onReset }: { license: License; onBack: () => void; onReset: () => void }) {
  const stats = loadStats(license);
  const themes = themesFor(license);
  const meta = LICENSE_META[license];
  const themeKeys = Object.keys(themes) as Theme[];
  const totalAttempts = themeKeys.reduce((s, t) => s + (stats[t]?.attempts ?? 0), 0);
  const totalCorrect = themeKeys.reduce((s, t) => s + (stats[t]?.correct ?? 0), 0);
  const overall = totalAttempts ? Math.round((totalCorrect / totalAttempts) * 100) : 0;

  return (
    <div className="space-y-3">
      <button onClick={onBack} className="text-xs text-slate-400">← retour</button>
      <h2 className="text-xl font-bold">Statistiques</h2>

      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
        <div className="text-xs text-slate-400">Score global</div>
        <div className="text-3xl font-bold">{overall}%</div>
        <div className="text-xs text-slate-500">{totalCorrect} bonnes / {totalAttempts} tentatives</div>
      </div>

      <div className="space-y-2">
        {themeKeys.map(t => {
          const info = themes[t]!;
          const s = stats[t] ?? { attempts: 0, correct: 0 };
          const pct = s.attempts ? Math.round((s.correct / s.attempts) * 100) : 0;
          const color = !s.attempts ? 'bg-slate-700' : pct >= 80 ? 'bg-emerald-500' : pct >= 50 ? 'bg-amber-500' : 'bg-rose-500';
          return (
            <div key={t} className="p-3 rounded-lg bg-slate-900 border border-slate-800">
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-sm"><span className={`font-bold ${meta.accent}`}>{t}</span> · {info.short}</span>
                <span className="text-xs text-slate-400">{s.attempts === 0 ? '—' : `${pct}%`} · {s.correct}/{s.attempts}</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded overflow-hidden">
                <div className={`h-2 ${color}`} style={{ width: `${pct}%` }} />
              </div>
            </div>
          );
        })}
      </div>

      {totalAttempts > 0 && (
        <button onClick={onReset} className="w-full p-2 text-xs text-slate-400 underline">
          Réinitialiser les statistiques
        </button>
      )}
    </div>
  );
}

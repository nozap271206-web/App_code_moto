import { useEffect, useMemo, useState } from 'react';
import { QUESTIONS } from './data/questions';
import { THEMES, type Answer, type Question, type Theme } from './types';

type Screen =
  | { name: 'home' }
  | { name: 'theme-pick'; mode: 'train' }
  | { name: 'quiz'; questions: Question[]; mode: 'train' | 'exam'; title: string }
  | { name: 'results'; answers: Answer[]; questions: Question[]; mode: 'train' | 'exam'; title: string }
  | { name: 'review-errors' };

const STORAGE_KEY = 'codemoto.errors.v1';

function loadErrors(): Record<string, number> {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch { return {}; }
}
function saveErrors(e: Record<string, number>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(e));
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
  const [screen, setScreen] = useState<Screen>({ name: 'home' });
  const errorStore = useMemo(loadErrors, [screen.name]);

  return (
    <div className="min-h-full max-w-2xl mx-auto px-4 py-6">
      <header className="flex items-center justify-between mb-6">
        <button
          onClick={() => setScreen({ name: 'home' })}
          className="text-amber-400 font-bold text-xl tracking-tight"
        >
          🏍️ Code Moto
        </button>
        <span className="text-xs text-slate-400">{QUESTIONS.length} questions</span>
      </header>

      {screen.name === 'home' && (
        <Home
          errorCount={Object.keys(errorStore).length}
          onTrain={() => setScreen({ name: 'theme-pick', mode: 'train' })}
          onExam={() => {
            const qs = shuffle(QUESTIONS).slice(0, 40);
            setScreen({ name: 'quiz', questions: qs, mode: 'exam', title: 'Examen blanc ETM (40 questions)' });
          }}
          onReview={() => setScreen({ name: 'review-errors' })}
        />
      )}

      {screen.name === 'theme-pick' && (
        <ThemePick
          onPick={(t) => {
            const qs = shuffle(QUESTIONS.filter(q => q.theme === t));
            setScreen({ name: 'quiz', questions: qs, mode: 'train', title: `Thème ${t} — ${THEMES[t].short}` });
          }}
          onAll={() => {
            const qs = shuffle(QUESTIONS);
            setScreen({ name: 'quiz', questions: qs, mode: 'train', title: 'Entraînement libre — tous thèmes' });
          }}
          onBack={() => setScreen({ name: 'home' })}
        />
      )}

      {screen.name === 'quiz' && (
        <Quiz
          questions={screen.questions}
          mode={screen.mode}
          title={screen.title}
          onDone={(answers) => {
            const next = { ...errorStore };
            for (const a of answers) {
              if (!a.correct) next[a.questionId] = (next[a.questionId] || 0) + 1;
              else if (next[a.questionId]) delete next[a.questionId];
            }
            saveErrors(next);
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
            else setScreen({ name: 'quiz', questions: shuffle(qs), mode: 'train', title: 'Reprise des erreurs' });
          }}
        />
      )}

      {screen.name === 'review-errors' && (
        <ReviewErrors
          errors={errorStore}
          onStart={(qs) => setScreen({ name: 'quiz', questions: shuffle(qs), mode: 'train', title: 'Révision des erreurs' })}
          onClear={() => { saveErrors({}); setScreen({ name: 'home' }); }}
          onBack={() => setScreen({ name: 'home' })}
        />
      )}

      <footer className="mt-10 text-center text-xs text-slate-500">
        Banque originale calquée sur la grille publique ETM. Vérifiez toujours les règles à jour sur securite-routiere.gouv.fr.
      </footer>
    </div>
  );
}

function Home({ errorCount, onTrain, onExam, onReview }: {
  errorCount: number;
  onTrain: () => void;
  onExam: () => void;
  onReview: () => void;
}) {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold">Révise ton code moto</h1>
      <p className="text-slate-400 text-sm">Trois modes : entraînement par thème, examen blanc (40 questions, ≤ 5 erreurs pour valider), reprise de tes erreurs.</p>
      <div className="grid gap-3 mt-4">
        <Tile title="Entraînement" subtitle="Par thème ou tous mélangés" onClick={onTrain} accent="bg-amber-500" />
        <Tile title="Examen blanc" subtitle="40 questions, conditions ETM" onClick={onExam} accent="bg-rose-500" />
        <Tile
          title="Mes erreurs"
          subtitle={errorCount === 0 ? 'Aucune erreur enregistrée' : `${errorCount} question(s) à revoir`}
          onClick={onReview}
          accent="bg-sky-500"
          disabled={errorCount === 0}
        />
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
      className={`text-left p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-600 transition disabled:opacity-40 disabled:cursor-not-allowed`}
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

function ThemePick({ onPick, onAll, onBack }: { onPick: (t: Theme) => void; onAll: () => void; onBack: () => void }) {
  return (
    <div className="space-y-3">
      <button onClick={onBack} className="text-xs text-slate-400">← retour</button>
      <h2 className="text-xl font-bold">Choisis un thème</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {(Object.keys(THEMES) as Theme[]).map(t => {
          const count = QUESTIONS.filter(q => q.theme === t).length;
          return (
            <button
              key={t}
              onClick={() => onPick(t)}
              className="text-left p-3 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-500"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-bold text-amber-400">{t}</span>
                <span className="text-xs text-slate-500">{count} Q</span>
              </div>
              <div className="text-sm">{THEMES[t].short}</div>
              <div className="text-xs text-slate-500">{THEMES[t].label}</div>
            </button>
          );
        })}
      </div>
      <button onClick={onAll} className="w-full p-3 rounded-lg bg-amber-500 text-slate-950 font-semibold mt-3">
        Tous les thèmes mélangés
      </button>
    </div>
  );
}

function Quiz({ questions, mode, title, onDone, onAbort }: {
  questions: Question[]; mode: 'train' | 'exam'; title: string;
  onDone: (a: Answer[]) => void; onAbort: () => void;
}) {
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [validated, setValidated] = useState(false);

  const q = questions[i];
  const multi = q.correct.length > 1;

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

      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
        <div className="text-xs text-amber-400 mb-1">Thème {q.theme} {multi && '· plusieurs bonnes réponses'}</div>
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
  const passed = mode === 'exam' ? wrong <= 5 : good === total;

  return (
    <div className="space-y-4">
      <div className="text-xs text-slate-400">{title}</div>
      <div className={`p-6 rounded-xl border ${passed ? 'border-emerald-500 bg-emerald-500/10' : 'border-rose-500 bg-rose-500/10'}`}>
        <div className="text-3xl font-bold">{good} / {total}</div>
        {mode === 'exam' ? (
          <div className="text-sm mt-1">
            {passed ? '✓ Examen réussi (≤ 5 erreurs)' : `✗ Examen non validé (${wrong} erreurs, max 5)`}
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

function ReviewErrors({ errors, onStart, onClear, onBack }: {
  errors: Record<string, number>;
  onStart: (qs: Question[]) => void;
  onClear: () => void;
  onBack: () => void;
}) {
  const qs = QUESTIONS.filter(q => errors[q.id]);
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

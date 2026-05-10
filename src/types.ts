export type Theme =
  | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I';

export interface Question {
  id: string;
  theme: Theme;
  prompt: string;
  choices: string[];
  correct: number[];
  explanation: string;
}

export interface Answer {
  questionId: string;
  selected: number[];
  correct: boolean;
}

export const THEMES: Record<Theme, { label: string; short: string }> = {
  A: { label: 'Dispositions légales en matière de circulation routière', short: 'Dispositions légales' },
  B: { label: 'Le conducteur', short: 'Le conducteur' },
  C: { label: 'La route', short: 'La route' },
  D: { label: 'Les autres usagers de la route', short: 'Autres usagers' },
  E: { label: 'Réglementation générale et divers', short: 'Réglementation' },
  F: { label: 'Précautions à prendre en quittant le véhicule', short: 'Quitter le véhicule' },
  G: { label: 'Éléments mécaniques liés à la sécurité', short: 'Mécanique & sécurité' },
  H: { label: 'Équipements de protection', short: 'EPI' },
  I: { label: 'Conduite et environnement', short: 'Environnement' }
};

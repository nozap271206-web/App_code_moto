export type Theme =
  | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I';

export type SignKey =
  | 'stop' | 'cedez' | 'sens-interdit' | 'interdit-tous'
  | 'danger' | 'virage-droite' | 'chaussee-glissante' | 'travaux'
  | 'priorite-droite' | 'route-prioritaire' | 'fin-prioritaire'
  | 'limite-50' | 'limite-30' | 'limite-70' | 'limite-90'
  | 'fin-limitation' | 'fin-toutes-interdictions'
  | 'agglo-entree' | 'agglo-sortie'
  | 'autoroute' | 'fin-autoroute' | 'voie-rapide'
  | 'passage-pietons' | 'zone-30' | 'aire-pietonne'
  | 'sens-giratoire' | 'obligation-droite';

export type License = 'moto' | 'voiture';

export interface Question {
  id: string;
  theme: Theme;
  prompt: string;
  choices: string[];
  correct: number[];
  explanation: string;
  sign?: SignKey;
  licenses?: License[]; // si absent, valable pour les deux
}

export interface Answer {
  questionId: string;
  selected: number[];
  correct: boolean;
}

export interface ThemeStat {
  attempts: number;
  correct: number;
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

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
  | 'sens-giratoire' | 'obligation-droite'
  | 'buoy-lateral-port' | 'buoy-lateral-stbd'
  | 'buoy-cardinal-n' | 'buoy-cardinal-s' | 'buoy-cardinal-e' | 'buoy-cardinal-w'
  | 'buoy-danger-isole' | 'buoy-zone-sure';

export type License = 'moto' | 'voiture' | 'poids-lourds' | 'bateau';

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

export const PL_THEMES: Record<Theme, { label: string; short: string }> = {
  A: { label: 'Réglementation spécifique au transport routier', short: 'Réglementation PL' },
  B: { label: 'Temps de conduite et repos (Rgt CE 561/2006)', short: 'Temps de conduite' },
  C: { label: 'Comportement du PL sur la route', short: 'Comportement PL' },
  D: { label: 'Coexistence avec les autres usagers', short: 'Autres usagers' },
  E: { label: 'Tachygraphe et réglementation sociale', short: 'Tachygraphe' },
  F: { label: 'Arrimage et sécurisation de la cargaison', short: 'Cargaison' },
  G: { label: 'Mécanique et freinage spécifiques PL', short: 'Mécanique PL' },
  H: { label: 'Équipements obligatoires et matières dangereuses (ADR)', short: 'Équipements & ADR' },
  I: { label: 'Éco-conduite et environnement', short: 'Éco-conduite' }
};

export const BATEAU_THEMES: Partial<Record<Theme, { label: string; short: string }>> = {
  A: { label: 'Balisage maritime (système AISM)', short: 'Balisage' },
  B: { label: 'Règles de barre et de route (RIPAM/COLREG)', short: 'Règles de route' },
  C: { label: 'Météorologie maritime', short: 'Météorologie' },
  D: { label: 'Sécurité à bord et signaux de détresse', short: 'Sécurité' },
  E: { label: 'Navigation, cartes et instruments', short: 'Navigation' },
};

export function themesFor(lic: License): Partial<Record<Theme, { label: string; short: string }>> {
  if (lic === 'poids-lourds') return PL_THEMES;
  if (lic === 'bateau') return BATEAU_THEMES;
  return THEMES;
}

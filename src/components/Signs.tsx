import type { SignKey } from '../types';

// Pictogrammes simplifiés des panneaux routiers (symboles publics normalisés).
// Tracés à la main pour rester légers et stylisés.

const RedDisc = ({ children }: { children?: React.ReactNode }) => (
  <g>
    <circle cx="50" cy="50" r="46" fill="#fff" stroke="#d10000" strokeWidth="8" />
    {children}
  </g>
);

const BlueDisc = ({ children }: { children?: React.ReactNode }) => (
  <g>
    <circle cx="50" cy="50" r="46" fill="#1a4ca8" />
    {children}
  </g>
);

const Triangle = ({ children, inverted = false }: { children?: React.ReactNode; inverted?: boolean }) => (
  <g>
    {inverted ? (
      <polygon points="50,95 5,15 95,15" fill="#fff" stroke="#d10000" strokeWidth="8" strokeLinejoin="round" />
    ) : (
      <polygon points="50,5 95,85 5,85" fill="#fff" stroke="#d10000" strokeWidth="8" strokeLinejoin="round" />
    )}
    {children}
  </g>
);

const Square = ({ fill = '#1a4ca8', children }: { fill?: string; children?: React.ReactNode }) => (
  <g>
    <rect x="6" y="6" width="88" height="88" rx="4" fill={fill} />
    {children}
  </g>
);

const SIGNS: Record<SignKey, JSX.Element> = {
  stop: (
    <g>
      <polygon
        points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30"
        fill="#d10000" stroke="#fff" strokeWidth="4"
      />
      <text x="50" y="62" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="26" fill="#fff" fontWeight="900">STOP</text>
    </g>
  ),
  cedez: (
    <Triangle inverted>
      <text x="50" y="55" textAnchor="middle" fontSize="14" fill="#000">cédez le</text>
      <text x="50" y="70" textAnchor="middle" fontSize="14" fill="#000">passage</text>
    </Triangle>
  ),
  'sens-interdit': (
    <g>
      <circle cx="50" cy="50" r="46" fill="#d10000" />
      <rect x="20" y="44" width="60" height="12" fill="#fff" />
    </g>
  ),
  'interdit-tous': (
    <RedDisc>
      <line x1="20" y1="20" x2="80" y2="80" stroke="#d10000" strokeWidth="6" />
    </RedDisc>
  ),
  danger: (
    <Triangle>
      <text x="50" y="72" textAnchor="middle" fontSize="44" fill="#000" fontWeight="900">!</text>
    </Triangle>
  ),
  'virage-droite': (
    <Triangle>
      <path d="M30 75 Q30 40, 55 40 L70 40 M60 30 L72 40 L60 50" stroke="#000" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </Triangle>
  ),
  'chaussee-glissante': (
    <Triangle>
      <rect x="38" y="30" width="24" height="40" fill="#000" />
      <path d="M28 50 Q40 45, 50 55 T72 50" stroke="#000" strokeWidth="3" fill="none" />
      <path d="M28 65 Q40 60, 50 70 T72 65" stroke="#000" strokeWidth="3" fill="none" />
    </Triangle>
  ),
  travaux: (
    <Triangle>
      <circle cx="42" cy="55" r="5" fill="#000" />
      <rect x="48" y="40" width="6" height="25" fill="#000" />
      <rect x="40" y="65" width="22" height="5" fill="#000" />
    </Triangle>
  ),
  'priorite-droite': (
    <Triangle>
      <path d="M50 25 L50 60 M50 60 L70 60 M62 52 L70 60 L62 68" stroke="#000" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </Triangle>
  ),
  'route-prioritaire': (
    <g>
      <rect x="20" y="20" width="60" height="60" transform="rotate(45 50 50)" fill="#fff" stroke="#000" strokeWidth="4" />
      <rect x="32" y="32" width="36" height="36" transform="rotate(45 50 50)" fill="#ffcc00" />
    </g>
  ),
  'fin-prioritaire': (
    <g>
      <rect x="20" y="20" width="60" height="60" transform="rotate(45 50 50)" fill="#fff" stroke="#000" strokeWidth="4" />
      <rect x="32" y="32" width="36" height="36" transform="rotate(45 50 50)" fill="#bbb" />
      <line x1="20" y1="80" x2="80" y2="20" stroke="#000" strokeWidth="4" />
    </g>
  ),
  'limite-50': <RedDisc><text x="50" y="62" textAnchor="middle" fontSize="34" fontWeight="900">50</text></RedDisc>,
  'limite-30': <RedDisc><text x="50" y="62" textAnchor="middle" fontSize="34" fontWeight="900">30</text></RedDisc>,
  'limite-70': <RedDisc><text x="50" y="62" textAnchor="middle" fontSize="34" fontWeight="900">70</text></RedDisc>,
  'limite-90': <RedDisc><text x="50" y="62" textAnchor="middle" fontSize="34" fontWeight="900">90</text></RedDisc>,
  'fin-limitation': (
    <g>
      <circle cx="50" cy="50" r="46" fill="#fff" stroke="#000" strokeWidth="4" />
      <text x="50" y="62" textAnchor="middle" fontSize="34" fontWeight="900">50</text>
      <line x1="20" y1="80" x2="80" y2="20" stroke="#555" strokeWidth="5" />
    </g>
  ),
  'fin-toutes-interdictions': (
    <g>
      <circle cx="50" cy="50" r="46" fill="#fff" stroke="#000" strokeWidth="4" />
      <line x1="22" y1="78" x2="78" y2="22" stroke="#555" strokeWidth="5" />
      <line x1="30" y1="80" x2="80" y2="30" stroke="#555" strokeWidth="3" />
    </g>
  ),
  'agglo-entree': (
    <g>
      <rect x="6" y="20" width="88" height="60" fill="#fff" stroke="#000" strokeWidth="3" />
      <text x="50" y="58" textAnchor="middle" fontSize="16" fontWeight="700">VILLE</text>
    </g>
  ),
  'agglo-sortie': (
    <g>
      <rect x="6" y="20" width="88" height="60" fill="#fff" stroke="#000" strokeWidth="3" />
      <text x="50" y="58" textAnchor="middle" fontSize="16" fontWeight="700">VILLE</text>
      <line x1="10" y1="78" x2="90" y2="22" stroke="#d10000" strokeWidth="4" />
    </g>
  ),
  autoroute: (
    <Square fill="#0a7e2a">
      <path d="M30 70 L30 35 L50 60 L70 35 L70 70" stroke="#fff" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </Square>
  ),
  'fin-autoroute': (
    <Square fill="#0a7e2a">
      <path d="M30 70 L30 35 L50 60 L70 35 L70 70" stroke="#fff" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="10" y1="90" x2="90" y2="10" stroke="#fff" strokeWidth="5" />
    </Square>
  ),
  'voie-rapide': (
    <Square fill="#1a4ca8">
      <rect x="38" y="32" width="24" height="36" rx="3" fill="#fff" />
      <circle cx="44" cy="70" r="4" fill="#fff" />
      <circle cx="56" cy="70" r="4" fill="#fff" />
    </Square>
  ),
  'passage-pietons': (
    <Square fill="#1a4ca8">
      <polygon points="20,80 50,20 80,80" fill="#fff" />
      <circle cx="50" cy="40" r="5" fill="#1a4ca8" />
      <path d="M50 47 L50 65 M50 55 L42 70 M50 55 L58 70 M50 50 L42 58 M50 50 L58 58" stroke="#1a4ca8" strokeWidth="3" strokeLinecap="round" />
    </Square>
  ),
  'zone-30': (
    <g>
      <rect x="6" y="6" width="88" height="88" rx="4" fill="#fff" stroke="#000" strokeWidth="3" />
      <text x="50" y="30" textAnchor="middle" fontSize="14" fontWeight="700">ZONE</text>
      <circle cx="50" cy="60" r="22" fill="none" stroke="#d10000" strokeWidth="5" />
      <text x="50" y="68" textAnchor="middle" fontSize="20" fontWeight="900">30</text>
    </g>
  ),
  'aire-pietonne': (
    <Square fill="#1a4ca8">
      <circle cx="40" cy="32" r="6" fill="#fff" />
      <path d="M40 40 L40 65 M40 50 L30 65 M40 50 L50 65" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
      <circle cx="65" cy="38" r="4" fill="#fff" />
      <path d="M65 44 L65 60 M65 52 L58 62 M65 52 L72 62" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
    </Square>
  ),
  'sens-giratoire': (
    <BlueDisc>
      <path d="M50 22 a28 28 0 1 1 -28 28" stroke="#fff" strokeWidth="6" fill="none" strokeLinecap="round" />
      <polygon points="22,50 14,46 14,54" fill="#fff" />
      <path d="M50 38 a12 12 0 1 1 -12 12" stroke="#fff" strokeWidth="3" fill="none" />
    </BlueDisc>
  ),
  'obligation-droite': (
    <BlueDisc>
      <path d="M30 50 L60 50 M55 40 L65 50 L55 60" stroke="#fff" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </BlueDisc>
  )
};

export function Sign({ k, size = 96 }: { k: SignKey; size?: number }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label={k}>
      {SIGNS[k]}
    </svg>
  );
}

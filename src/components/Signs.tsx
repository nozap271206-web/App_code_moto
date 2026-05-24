import type { SignKey } from '../types';

const BASE = import.meta.env.BASE_URL;

export function Sign({ k, size = 96 }: { k: SignKey; size?: number }) {
  return (
    <img
      src={`${BASE}signs/${k}.svg`}
      alt={k}
      width={size}
      height={size}
      style={{ display: 'inline-block', objectFit: 'contain' }}
      loading="lazy"
    />
  );
}

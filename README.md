# Code Moto — Révision ETM

Application web (PWA) pour réviser l'**épreuve théorique moto (ETM)** française.
Calquée sur la grille publique des 9 thèmes (A → I) de la Sécurité Routière,
avec une banque de questions originales.

## Modes

- **Entraînement** — par thème ou tous mélangés, avec correction immédiate et explication.
- **Examen blanc** — 40 questions tirées au hasard, validation à 5 erreurs maximum (barème ETM).
- **Mes erreurs** — carnet local des questions ratées, à rejouer.

## Stack

- Vite + React + TypeScript + Tailwind
- PWA (installable sur téléphone / ordinateur)
- Déploiement automatique sur GitHub Pages via GitHub Actions

## Développement local

```bash
npm install
npm run dev
```

## Build de production

```bash
npm run build
npm run preview
```

## Déploiement

Push sur `main` → le workflow `.github/workflows/deploy.yml` construit et publie sur GitHub Pages.
URL une fois Pages activé : <https://nozap271206-web.github.io/App_code_moto/>

Pour activer Pages : **Settings → Pages → Source : GitHub Actions**.

## Avertissement

Banque de questions rédigée à titre pédagogique, sans réutilisation d'un ouvrage tiers.
Vérifiez toujours les règles à jour sur <https://www.securite-routiere.gouv.fr>.

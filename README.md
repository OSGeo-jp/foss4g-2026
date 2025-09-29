# FOSS4G 2026 Website

This repository contains the source code for the FOSS4G 2026 website, built using SvelteKit and TypeScript. The site supports both English and Japanese languages.

## how to run locally

```bash
npm install
npm run dev
```

Then open your browser and navigate to `http://localhost:5173/en` for the English version or `http://localhost:5173/ja` for the Japanese version.

## how to localize

```bash
npm run i18n:report
```

This command generates a report of untranslated strings in `reports/todo-<lang>.json` files. You can then edit these files to add translations. After updating the translations, run:

```bash
npm run i18n:merge:<lang>
# e.g., npm run i18n:merge:ja
```

to merge the translations into the main translation files located in `src/lib/translations/`.

## build and preview locally

```bash
npm run build
npm run preview
```

## preview deployment

The main branch is 'staging', and the production branch is 'main'.

Push to 'staging' to deploy to the staging environment, https://foss4g-2026.pages.dev/ . It is automatically deployed by Cloudflare Pages.

Push to 'main' to deploy to the production environment, but it is not implemented yet.

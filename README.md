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
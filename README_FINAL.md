# Tech Fusion — Final Website Package

## Included pages

- `/` — Home
- `/about` — About Us
- `/services` — Services
- `/solutions` — Solutions
- `/careers` — Careers
- `/contact` — Contact
- `/get-a-quote` — Project / quote request
- `/privacy` — Privacy notice
- `/terms` — Website terms

The previous **Our Work** and **Insights** navigation/pages are intentionally not included.

## Contact email

The website currently uses:

`hello@mtechfusion.com`

It is defined once in:

`src/constants/site.ts`

Change that value before publishing if your active company mailbox uses a different address.

## Local run

```bash
npm install
npm run dev
```

## Production check

```bash
npm run build
```

Do not publish until the build completes successfully on your machine.

## Forms

The Contact and Get a Quote forms do not send data to a hidden database. They prepare a structured email in the visitor's configured email application and provide a copy-to-clipboard fallback. This keeps the site functional without requiring a backend email provider.

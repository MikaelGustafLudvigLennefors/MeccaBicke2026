# Bröllopshemsida

## Komma igång lokalt

1. Klona repot: `git clone <URL>`
2. Installera beroenden: `npm install`
3. Skapa en fil `.env.local` i projektroten med:
RSVP_WEBHOOK_URL=

4. Starta dev-servern: `npm run dev`
5. Öppna `http://localhost:3000`

## Deployment

- Koppla GitHub-repot till Vercel eller Netlify för automatisk CI/CD.
- När du är nöjd lokalt, push till `main` och deploy på Vercel.

## Milestone-funktioner
- RSVP-formulär som POST:ar till `/api/rsvp`.
- Google Sheets-webhook hanterar lagring och notiser.
- Komponenter för datum, karta, boende, FAQ, bilder och nedräkning.
- Lätt att ändra färgtema i `tailwind.config.js`.
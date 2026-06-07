# Dagmans Webbshop - React-projekt

Detta är en modern e-handel byggd i React med funktioner som dynamisk produktkatalog, kategorifiltrering, varukorgshantering via Context API samt en optimerad sökfunktion med debounce-logik.

## Installation och uppstart

Följ dessa steg för att installera och köra igång projektet lokalt på din dator:

1. **Klona repot:**

   ```bash
   git clone <KLISTRA_IN_LÄNKEN_TILL_DITT_GITHUB_REPO_HÄR>
   ```

2. cd <NAMNET_PÅ_DIN_PROJEKTMAPP>

3. npm install

4. npm run dev

namn på repot: react-webshop-2026ad

1. Debounce
   För att minimera antalet onödiga API-anrop till vår databas har sökkomponenten SearchFilter.jsx utrustats med en Debounce-funktion.

När användaren skriver i sökrutan triggas en timer (setTimeout) på en fördröjning. Om användaren fortsätter skriva inom den angivna tidsramen, rensas den gamla timern bort med en cleanup-funktion (clearTimeout) inuti en useEffect.

API-anropet skickas iväg först när användaren har slutat skriva och gjort en naturlig paus. Detta sparar enormt mycket serverresurser.

2. Felhantering med try...catch
   För att säkerställa en stabil och driftsäker användarupplevelse görs alla asynkrona nätverksanrop (fetch) inuti ett try...catch-block.

Try: Vi försöker hämta data från vårt API och kontrollerar om svaret är godkänt (req.ok). Om svaret är korrekt omvandlas datan till JSON och sparas i komponentens state.

Catch: Om nätverket skulle ligga nere, eller om API:et returnerar ett fel, fångas felet upp i catch-blocket. Istället för att hela applikationen kraschar med en vit skärm, loggas felet säkert i konsolen, och appen kan visa ett användarvänligt felmeddelande eller behålla sitt stabila tillstånd.

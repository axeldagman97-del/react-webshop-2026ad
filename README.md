Dagmans Webbshop - React-projekt

En modern och responsiv e-handel byggd i React. Applikationen innehåller funktioner som dynamisk produktkatalog, kategorifiltrering, varukorgshantering via 
**Context API** samt en optimerad sökfunktion med debounce-logik.


Tekniker & Verktyg

- Frontend: React, HTML5, CSS3 / Tailwind CSS
- State Management: React Context API
- Verktyg & Bundler: Vite / Create React App, npm, Git

 Tekniska höjdpunkter & Arkitektur

1. Sökoptimering med Debounce
För att minimera antalet onödiga API-anrop till databasen är sökkomponenten (`SearchFilter.jsx`) utrustad med debounce-logik:
* När användaren skriver i sökrutan triggas en timer (`setTimeout`).
* Om användaren fortsätter skriva inom den angivna tidsramen rensas den gamla timern med en cleanup-funktion (`clearTimeout`) inuti en `useEffect`.
* API-anropet skickas iväg först när användaren har slutat skriva och gjort en naturlig paus, vilket sparar betydande serverresurser.

2. Robust felhantering (`try...catch`)
Alla asynkrona nätverksanrop (`fetch`) hanteras inuti `try...catch`-block för en stabil användarupplevelse:

**Try:**
Hämtar data från API:et och kontrollerar om svaret är godkänt (`res.ok`). Om svaret är korrekt omvandlas datan till JSON och sparas i komponentens state.

**Catch:**
Om nätverket ligger nere eller API:et returnerar ett fel fångas det upp säkert. Applikationen undviker krasch/vit skärm, loggar felet och kan visa ett användarvänligt meddelande.

--- 

🚀 Installation och lokal uppstart

Följ dessa steg för att köra projektet lokalt på din dator:

1. **Klona repot:**
   ```bash
   git clone https://github.com/axeldagman/react-webshop-2026ad.git
            
   

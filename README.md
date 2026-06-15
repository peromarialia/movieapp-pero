#MovieApp 

**Corso:** Introduzione allo sviluppo frontend  
**Stato Progetto:** Completato (Versione Interfaccia Avanzata)

## 1. Obiettivo del progetto
Realizzare una **web app multi-pagina** per la consultazione di film e serie TV, sviluppata con HTML, CSS e JavaScript Vanilla, integrando chiamate asincrone tramite `fetch` e manipolazione avanzata del DOM. Il progetto è stato personalizzato passando da un tema standard in stile Netflix a un'interfaccia con accenti viola neon e transizioni tridimensionali.

## 2. Struttura del Progetto
L'applicazione è suddivisa in più viste HTML collegate a un foglio di stile centralizzato e logiche JavaScript modulari:

- **`index.html`**: Pagina principale che mostra i contenuti in evidenza (film e serie TV).
- **`movies.html`**: Vista dedicata esclusivamente al catalogo dei film.
- **`series.html`**: Vista dedicata esclusivamente al catalogo delle serie TV.
- **`profile.html`**: Pagina del profilo utente (statica e informativa).
- **`css/style.css`**: Foglio di stile personalizzato.
- **`js/`**: Moduli JavaScript per la gestione delle chiamate API e il rendering.

## 3. Tecnologie e Standard Utilizzati
- **HTML5**: Struttura semantica e accessibile.
- **CSS3**: Layout Flexbox/Grid, transizioni fluide, animazioni 3D in hover, custom properties e font personalizzati (Poppins).
- **JavaScript (ES6+)**: Programmazione asincrona (`async`/`await`, `fetch` API), moduli e metodi sugli array (`filter`, `map`).
- **TMDB API**: Integrazione prevista per il recupero dei trend e cataloghi dinamici.

## 4. Dettagli di Stile e Interazione (CSS)
Il tema grafico è stato completamente ridisegnato per offrire un'esperienza immersiva e moderna:
- **Sfondo e Palette**: Sfondo principale scurissimo (`#08080f`) accoppiato a card strutturate come pannelli in vetro (`#12131f`) e bordi viola neon.
- **Tipologia Font**: Carattere importato da Google Fonts (`Poppins`) per una leggibilità superiore e un look contemporaneo.
- **Schede Interattive (Card 3D)**: Angoli molto arrotondati (`border-radius: 28px`), effetto sollevamento e ingrandimento al passaggio del mouse (`transform: translateY(-12px) scale(1.03)`) con ombra viola profonda e bagliore diffuso.
- **Trama a Scomparsa (Pop-up Hover)**: La descrizione dettagliata (trama) è nascosta di default. Quando l'utente passa sopra la locandina, la scheda si espande fluidamente (`max-height: 250px`) svelando l'intero testo senza tagliarlo.

## 5. Logica e Moduli JavaScript
- **`api.js`**: Gestisce il recupero dei dati, attualmente interfacciato con un catalogo locale (`movies.json`).
- **`utils.js`**: Contiene funzioni riutilizzabili per la gestione dello stato di caricamento e per il rendering dinamico delle card tramite template literals e sanitizzazione HTML.
- **Script di Inizializzazione** (`main.js`, `movies.js`, `series.js`): Caricano i dati specifici per ogni pagina e avvengono in modo asincrono.

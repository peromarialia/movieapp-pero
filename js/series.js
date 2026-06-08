import { getSeries } from "./api.js";
import { renderCards, setStatus, hideStatus } from "./utils.js";

const grid = document.querySelector("#content-grid");

async function init() {
  try {
    setStatus("Caricamento serie...");

    const series = await getSeries();

    renderCards(series, grid);
    hideStatus();
  } catch (error) {
    setStatus("Si è verificato un errore durante il caricamento delle serie.");
    console.error(error);
  }
}

init();
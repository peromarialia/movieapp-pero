import { getAllContent } from "./api.js";
import { renderCards, setStatus, hideStatus } from "./utils.js";

const grid = document.querySelector("#content-grid");

async function init() {
  try {
    setStatus("Caricamento contenuti...");

    const content = await getAllContent();

    renderCards(content, grid);
    hideStatus();
  } catch (error) {
    setStatus("Si è verificato un errore durante il caricamento dei contenuti.");
    console.error(error);
  }
}

init();
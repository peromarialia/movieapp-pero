import { getMovies } from "./api.js";
import { renderCards, setStatus, hideStatus } from "./utils.js";

const grid = document.querySelector("#content-grid");

async function init() {
  try {
    setStatus("Caricamento film...");

    const movies = await getMovies();

    renderCards(movies, grid);
    hideStatus();
  } catch (error) {
    setStatus("Si è verificato un errore durante il caricamento dei film.");
    console.error(error);
  }
}

init();
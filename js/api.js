// js/api.js
import { API_KEY } from "./config.js";

const BASE_URL = "https://api.themoviedb.org/3";
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

function mapTMDBItem(item, defaultType) {
  const mediaType = item.media_type || defaultType;
  
  return {
    id: item.id,
    title: item.title || item.name, // I film usano 'title', le serie usano 'name'
    type: mediaType === "tv" ? "series" : "movie", // utils.js riconosce "series" o "movie"
    poster: item.poster_path ? `${IMG_BASE_URL}${item.poster_path}` : "https://placehold.co/300x450?text=No+Image",
    year: (item.release_date || item.first_air_date || "").substring(0, 4) || "N/D",
    rating: item.vote_average ? item.vote_average.toFixed(1) : "N/D",
    overview: item.overview || "Nessuna trama disponibile."
  };
}

// 1. Home Page: Prende i contenuti in tendenza (sia film che serie mixati)
export async function getAllContent() {
  const url = `${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=it-IT`;
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`Errore API TMDB (Trending): ${response.status}`);
  }
  
  const data = await response.json();
  // I risultati reali si trovano dentro data.results
  return data.results.map(item => mapTMDBItem(item, item.media_type));
}

// 2. Pagina Film: Prende i film popolari
export async function getMovies() {
  const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=it-IT`;
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`Errore API TMDB (Movies): ${response.status}`);
  }
  
  const data = await response.json();
  return data.results.map(item => mapTMDBItem(item, "movie"));
}

// 3. Pagina Serie: Prende le serie TV popolari
export async function getSeries() {
  const url = `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=it-IT`;
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`Errore API TMDB (Series): ${response.status}`);
  }
  
  const data = await response.json();
  return data.results.map(item => mapTMDBItem(item, "tv"));
}
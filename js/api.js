const LOCAL_DATA_URL = "./movies.json";

async function getLocalCatalog() {
  const response = await fetch(LOCAL_DATA_URL);

  if (!response.ok) {
    throw new Error("Errore nel caricamento del catalogo locale.");
  }

  const data = await response.json();
  return data.map(item => {
    return {
      id: item.id,
      title: item.title || item.name,
      type: item.title ? "movie" : "series", // capisce se è film o serie
      poster: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : null,
      year: item.release_date ? item.release_date.substring(0, 4) : "N/D",
      rating: item.vote_average,
      overview: item.overview
    };
  });
}

export async function getAllContent() {
  return getLocalCatalog();
}

export async function getMovies() {
  const items = await getLocalCatalog();
  return items.filter((item) => item.type === "movie");
}

export async function getSeries() {
  const items = await getLocalCatalog();
  return items.filter((item) => item.type === "series");
}

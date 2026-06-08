const LOCAL_DATA_URL = "./movies.json";

async function getLocalCatalog() {
  const response = await fetch(LOCAL_DATA_URL);

  if (!response.ok) {
    throw new Error("Errore nel caricamento del catalogo locale.");
  }

  const data = await response.json();
  return data.items;
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

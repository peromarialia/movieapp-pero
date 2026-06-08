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


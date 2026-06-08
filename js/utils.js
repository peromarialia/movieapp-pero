export function renderCards(items, container) {
  if (!items || items.length === 0) {
    container.innerHTML = "<p>Nessun contenuto disponibile.</p>";
    return;
  }

  container.innerHTML = items.map(createCard).join("");
}

export function setStatus(message) {
  const statusElement = document.querySelector("#status");

  if (!statusElement) return;

  statusElement.textContent = message;
}

export function hideStatus() {
  const statusElement = document.querySelector("#status");

  if (!statusElement) return;

  statusElement.style.display = "none";
}

function createCard(item) {
  const typeLabel = item.type === "series" ? "Serie" : "Film";
  const poster = item.poster || "https://placehold.co/300x450?text=No+Image";

  return `
    <article class="card">
      <img src="${escapeHTML(poster)}" alt="${escapeHTML(item.title)}" />
      <div class="card-content">
        <span class="badge">${typeLabel}</span>
        <h2 class="card-title">${escapeHTML(item.title)}</h2>
        <div class="card-meta">
          <span>${escapeHTML(item.year || "N/D")}</span>
          <span>⭐ ${escapeHTML(item.rating || "N/D")}</span>
        </div>
        <p class="card-overview">${escapeHTML(item.overview || "Descrizione non disponibile.")}</p>
      </div>
    </article>
  `;
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
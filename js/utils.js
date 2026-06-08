export function renderCards(items, container) {
  if (!items || items.length === 0) {
    container.innerHTML = "<p>Nessun contenuto disponibile.</p>";
    return;
  }

// script.js
// Loads the games JSON and renders it into the page.

document.addEventListener("DOMContentLoaded", async () => {
  const feedElem = document.getElementById("news-feed");
  try {
    const response = await fetch("games.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const games = await response.json();
    if (!Array.isArray(games) || games.length === 0) {
      feedElem.innerHTML = `<p>No game releases found yet. Check back later!</p>`;
      return;
    }
    games.forEach((game) => {
      const article = document.createElement("article");
      article.className = "game";
      article.innerHTML = `
        <h2>${game.title}</h2>
        <p><strong>Release date:</strong> ${game.release_date || "Unknown"}</p>
        <p><strong>Platforms:</strong> ${game.platforms || "TBD"}</p>
        ${game.description ? `<p>${game.description}</p>` : ""}
        <p><a href="${game.url}" target="_blank" rel="noopener">Source</a></p>
      `;
      feedElem.appendChild(article);
    });
  } catch (err) {
    console.error("Failed to load games.json", err);
    feedElem.innerHTML = `<p>Error loading game releases.</p>`;
  }
});

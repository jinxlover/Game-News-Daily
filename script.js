/* script.js
 * Fetches game release data from games.json and renders it into the page.
 * Cards are styled using the 'card' and 'meta' classes defined in style.css.
 */

document.addEventListener("DOMContentLoaded", async () => {
  const feed = document.getElementById("news");
  try {
    const response = await fetch("games.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const games = await response.json();
    if (!Array.isArray(games) || games.length === 0) {
      feed.innerHTML = '<p>No game releases found yet. Check back later!</p>';
      return;
    }
    // Clear any existing content
    feed.innerHTML = "";
    games.forEach((game) => {
      const card = document.createElement("article");
      card.className = "card";

      // Title
      const title = document.createElement("h3");
      title.textContent = game.title;

      // Meta info for release date and platforms
      const meta = document.createElement("div");
      meta.className = "meta";
      const releaseSpan = document.createElement("span");
      releaseSpan.innerHTML = `<strong>Release date:</strong> ${game.release_date || "Unknown"}`;
      const platformSpan = document.createElement("span");
      const platformsText = Array.isArray(game.platforms) ? game.platforms.join(", ") : "N/A";
      platformSpan.innerHTML = `<strong>Platforms:</strong> ${platformsText}`;
      meta.appendChild(releaseSpan);
      meta.appendChild(platformSpan);

      // Description
      let description;
      if (game.description) {
        description = document.createElement("p");
        description.textContent = game.description;
      }

      // Link to more info
      const link = document.createElement("a");
      link.href = game.url || "#";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "More info";

      // Assemble card
      card.appendChild(title);
      card.appendChild(meta);
      if (description) card.appendChild(description);
      card.appendChild(link);

      feed.appendChild(card);
    });
  } catch (error) {
    console.error("Failed to load games.json", error);
    feed.innerHTML = '<p>Error loading game releases.</p>';
  }
});

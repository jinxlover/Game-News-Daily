# Game News Daily

Game News Daily is a GitHub Pages site that aggregates and displays new and upcoming releases for niche and indie games from a wide variety of online sources. The goal is to surface hidden gems and rare game announcements that often go unnoticed.

## Features

- **Automatic Web Scraping**: Collects news from multiple sources (official sites, press releases, blogs, communities, etc.) on a schedule using GitHub Actions.
- **Extensible Sources**: Easily add new websites or APIs to scrape by editing `scraper.py`.
- **JSON Feed**: Stores scraped data in a JSON file (`games.json`) which the website uses to populate the feed.
- **Simple Frontend**: HTML/CSS/JS frontend with minimal styling that lists game titles, release dates, descriptions, platforms, and source links.
- **Self-Updating**: Uses GitHub Actions to run the scraper and commit changes to the JSON feed automatically.

## Usage

1. **View the site**: Open the `index.html` file in your browser, or enable GitHub Pages in the repository settings.
2. **Add Sources**: Edit the `scraper.py` script to add scraping functions for new websites or APIs. Save the results as dictionaries with `title`, `release_date`, `description`, `platforms`, and `source`.
3. **Run Scraper Locally**: Install dependencies with `pip install requests beautifulsoup4` and run `python scraper.py`. The script will update `games.json`.
4. **Automated Updates**: The GitHub Actions workflow in `.github/workflows/update_feed.yml` is scheduled to run daily, run the scraper, and commit updates to `games.json`. You can trigger the workflow manually from the Actions tab.
5. **Modify Frontend**: Customize the appearance of the website by editing `style.css`. Use `script.js` to change how data is loaded or displayed.

## Contributing

Contributions are welcome! If you have ideas for new sources, features, or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See `LICENSE` for details.

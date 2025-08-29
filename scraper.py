#!/usr/bin/env python3
"""
Game News Daily Scraper
=======================

This script aggregates niche game release announcements from various web
sources.  It writes the output to a JSON file used by the website to display
the news feed.  The default implementation includes a single example source
for demonstration purposes.  To make the scraper useful in production,
replace or extend the `scrape_example_source` function with real scraping
logic.

Each source function should return a list of dictionaries with the keys
`title`, `release_date`, `platforms`, `description` and `url`.
"""

import datetime
import json
from typing import List, Dict


def scrape_example_source() -> List[Dict[str, str]]:
    """Example scraping function.

    Returns a static entry for demonstration.  Replace this logic with
    requests/BeautifulSoup or API calls to fetch real data from your
    preferred niche game release sources.
    """
    games = [
        {
            "title": "Indie Mystery Quest",
            "release_date": "2025-10-05",
            "platforms": "PC, Xbox Series X|S",
            "description": "An atmospheric puzzle game with hand-drawn art.",
            "url": "https://example.com/indie-mystery-quest",
        }
    ]
    return games


def main() -> None:
    """Aggregate game releases from multiple sources and write JSON feed."""
    all_games: List[Dict[str, str]] = []

    # Gather data from each source
    all_games.extend(scrape_example_source())

    # Sort by release date descending
    def parse_date(date_str: str) -> datetime.datetime:
        try:
            return datetime.datetime.strptime(date_str, "%Y-%m-%d")
        except Exception:
            return datetime.datetime.min

    all_games.sort(
        key=lambda g: parse_date(g.get("release_date", "")), reverse=True
    )

    # Write to JSON file
    with open("games.json", "w", encoding="utf-8") as f:
        json.dump(all_games, f, ensure_ascii=False, indent=2)

    print(f"Saved {len(all_games)} game release(s) to games.json")


if __name__ == "__main__":
    main()

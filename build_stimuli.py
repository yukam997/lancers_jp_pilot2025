#!/usr/bin/env python3
"""
build_stimuli.py

Regenerates stimuli.js for the JP and EN modifier experiments from a single
long-format CSV.

Expected CSV columns (header row required):
    predicate, attitude, relationship, language, text

- `language` must be either "JP" or "EN" (case-sensitive).
- `text` must contain the literal placeholder "[modifier]" marking the blank
  to be filled in by participants.
- Every (predicate, attitude, relationship, language) combination should be
  unique -- the experiment picks one row per (relationship, attitude) pair at
  random from the matching predicate options at runtime, so duplicates would
  just be ignored (last one wins) and missing combinations will show up as
  "Missing stimulus for ..." warnings in the browser console when the
  experiment runs.

Usage:
    python3 build_stimuli.py path/to/scenarios_long.csv \
        --jp-dir path/to/modifier-experiment \
        --en-dir path/to/modifier-experiment-en

If --jp-dir / --en-dir are omitted, it looks for "modifier-experiment" and
"modifier-experiment-en" folders next to the CSV file (or in the current
working directory).

Each output stimuli.js defines:
    var stimuliPool = [
        { "predicate": "...", "attitude": "...", "relationship": "...", "text": "..." },
        ...
    ];

which index.html reads at runtime to build each participant's 24-scenario
timeline (one random predicate per relationship x attitude combination).
"""

import argparse
import csv
import json
import sys
from pathlib import Path

REQUIRED_COLUMNS = {"predicate", "attitude", "relationship", "language", "text"}
LANGUAGE_TO_FOLDER_ARG = {"JP": "jp_dir", "EN": "en_dir"}


def load_rows(csv_path: Path):
    with csv_path.open(encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)
        missing_cols = REQUIRED_COLUMNS - set(reader.fieldnames or [])
        if missing_cols:
            sys.exit(
                f"Error: CSV is missing required column(s): {', '.join(sorted(missing_cols))}\n"
                f"Found columns: {reader.fieldnames}"
            )
        rows = list(reader)
    return rows


def validate_rows(rows):
    problems = []
    for i, r in enumerate(rows, start=2):  # +2: header is row 1, data starts at row 2
        lang = r.get("language", "").strip()
        if lang not in ("JP", "EN"):
            problems.append(f"Row {i}: unrecognized language '{lang}' (expected JP or EN)")
        text = r.get("text", "")
        if "[modifier]" not in text:
            problems.append(f"Row {i}: missing '[modifier]' placeholder in text")
    if problems:
        print("Warning: found issues in the CSV:")
        for p in problems:
            print("  -", p)
        print()


def build_pool(rows, language):
    pool = []
    for r in rows:
        if r.get("language", "").strip() != language:
            continue
        pool.append({
            "predicate": r["predicate"].strip(),
            "attitude": r["attitude"].strip(),
            "relationship": r["relationship"].strip(),
            "text": r["text"].strip(),
        })
    return pool


def write_stimuli_js(pool, out_dir: Path):
    out_dir.mkdir(parents=True, exist_ok=True)
    out_path = out_dir / "stimuli.js"
    js = "var stimuliPool = " + json.dumps(pool, ensure_ascii=False, indent=2) + ";\n"
    out_path.write_text(js, encoding="utf-8")
    return out_path


def summarize(pool, label):
    predicates = sorted(set(p["predicate"] for p in pool))
    attitudes = sorted(set(p["attitude"] for p in pool))
    relationships = sorted(set(p["relationship"] for p in pool))
    expected = len(predicates) * len(attitudes) * len(relationships)
    print(f"[{label}] {len(pool)} stimuli "
          f"({len(predicates)} predicates x {len(attitudes)} attitudes x {len(relationships)} relationships "
          f"= {expected} expected)")
    if len(pool) != expected:
        print(f"  Warning: {label} pool size does not match the full combinatorial grid. "
              f"Some (predicate, attitude, relationship) combinations may be missing or duplicated.")


def main():
    parser = argparse.ArgumentParser(description="Build stimuli.js files from a long-format scenario CSV.")
    parser.add_argument("csv_path", type=Path, help="Path to the long-format CSV (predicate, attitude, relationship, language, text).")
    parser.add_argument("--jp-dir", type=Path, default=None, help="Output folder for the Japanese experiment (default: ./modifier-experiment next to the CSV).")
    parser.add_argument("--en-dir", type=Path, default=None, help="Output folder for the English experiment (default: ./modifier-experiment-en next to the CSV).")
    args = parser.parse_args()

    if not args.csv_path.exists():
        sys.exit(f"Error: CSV file not found: {args.csv_path}")

    base_dir = args.csv_path.resolve().parent
    jp_dir = args.jp_dir or (base_dir / "modifier-experiment")
    en_dir = args.en_dir or (base_dir / "modifier-experiment-en")

    rows = load_rows(args.csv_path)
    validate_rows(rows)

    jp_pool = build_pool(rows, "JP")
    en_pool = build_pool(rows, "EN")

    if not jp_pool:
        print("Warning: no rows found with language == 'JP'.")
    if not en_pool:
        print("Warning: no rows found with language == 'EN'.")

    jp_out = write_stimuli_js(jp_pool, jp_dir)
    en_out = write_stimuli_js(en_pool, en_dir)

    summarize(jp_pool, "JP")
    print("  written to", jp_out)
    summarize(en_pool, "EN")
    print("  written to", en_out)


if __name__ == "__main__":
    main()

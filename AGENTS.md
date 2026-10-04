# Project Customization & System Context
This file serves as the permanent source of truth for the workspace. It captures project-specific rules, architecture patterns, and the recent structural extensions implemented globally across the app.

## Recent Core Upgrades & Feature Architecture

### 1. Unified Multi-Level Progress Tracking
* **The Concept**: Level-based learning across all quiz and flashcard modes.
* **Mechanism**:
  - Vocabulary within each topic is partitioned into up to 10 progressive levels.
  - Unlocking level $N$ requires achieving **>= 70%** on active material in level $N-1$.
  - Progress keys are format-standardized as `${mode}_level_${levelNum}`.

### 2. High-Performance Level Selector Dashboard
* Sub-mode level cards dynamically re-calculate specific subset counts and display exact metrics (e.g., Nouns for Article mode, Verbs for Verb mode, etc.).

### 3. Progressive Offline Service Worker (`sw.js`)
* Installed in `/public/sw.js` and registered in `/src/main.js`.

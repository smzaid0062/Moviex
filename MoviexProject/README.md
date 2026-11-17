# 🎬 Movix — Movie Discovery Web App

> A modern, high-performance movie discovery platform built with **React**, **Redux Toolkit**, **Vite**, and **SCSS** — powered by **The Movie Database (TMDB) API**.

<p align="center">
  <img src="./public/movix-logo.svg" alt="Movix Logo" width="180" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Redux_Toolkit-2.x-764ABC?logo=redux&logoColor=white" />
  <img src="https://img.shields.io/badge/SCSS-Sass-CC6699?logo=sass&logoColor=white" />
  <img src="https://img.shields.io/badge/ESLint-Configured-4B32C3?logo=eslint&logoColor=white" />
  <img src="https://img.shields.io/badge/License-MIT-blue" />
</p>

---

## 📑 Table of Contents

1. [Overview](#-overview)
2. [Architecture Diagram](#-architecture-diagram)
3. [Feature Map](#-feature-map)
4. [Directory Structure](#-directory-structure)
5. [Data Flow](#-data-flow)
6. [Tech Stack](#-tech-stack)
7. [Getting Started](#-getting-started)
8. [Environment Variables](#-environment-variables)
9. [Available Scripts](#-available-scripts)
10. [API Reference](#-api-reference)
11. [Project Constraints & Rules](#-project-constraints--rules)
12. [Coding Standards](#-coding-standards)
13. [Performance Budget](#-performance-budget)
14. [Contributing](#-contributing)
15. [License](#-license)

---

## 🧭 Overview

**Movix** is a single-page application (SPA) that lets users:

- 🔍 Search across **movies**, **TV shows**, and **people**
- 🎞️ Browse curated **Trending**, **Popular**, **Top Rated**, and **User Choice** sections
- 📄 View rich **details pages** with cast, trailers, recommendations, and similar titles
- 🎛️ Filter explore results by **genre**, **media type**, and **sort order**
- ▶️ Watch embedded **YouTube trailers** in a modal video popup
- 📱 Enjoy a fully **responsive, mobile-first** UI

---

## 🏗️ Architecture Diagram

```mermaid
flowchart TD
    A["User Browser"] --> B["index.html"]
    B --> C["main.jsx"]
    C --> D["Redux Provider<br/>(store.js)"]
    D --> E["App.jsx<br/>React Router"]
    E --> F["Pages"]
    E --> G["Shared Components"]

    F --> F1["Home"]
    F --> F2["Explore"]
    F --> F3["SearchResult"]
    F --> F4["Details"]
    F --> F5["404 PageNotFound"]

    G --> G1["Header"]
    G --> G2["Footer"]
    G --> G3["Carousel"]
    G --> G4["MovieCard"]
    G --> G5["Genres"]
    G --> G6["SwitchTabs"]
    G --> G7["CircleRating"]
    G --> G8["VideoPopup"]
    G --> G9["Spinner"]
    G --> G10["LazyImage"]

    F --> H["useFetch Hook"]
    H --> I["utils/api.js<br/>Axios Client"]
    I --> J[("TMDB API")]
    D --> K["homeSlice.js<br/>Redux State"]

    style A fill:#1e1e2e,color:#fff
    style J fill:#01b4e4,color:#fff
    style D fill:#764ABC,color:#fff
    style I fill:#646CFF,color:#fff
# 🌍 Portail FAFA – Multi-jeux éducatifs

Bienvenue dans le dépôt des aventures FAFA™ se déroulant à Banyuls-sur-Mer.  
Ce portail permet de lancer plusieurs jeux à destination des familles, groupes, scolaires et visiteurs curieux.

---

## 🇫🇷 Instructions (FR)

### 🎯 Objectif
Ce dépôt GitHub permet d'héberger plusieurs jeux interactifs accessibles depuis une seule page d’accueil (`index.html`).

### 📁 Structure recommandée
```
/
├── index.html               ← Portail principal multilingue
├── /atelier-fantome/        ← Dossier d’un jeu
│   └── index.html, enigme1.html, ...
├── /galaxie-fafou/
├── /panique-musee/
└── ...
```

### 🚀 Déployer sur GitHub Pages
1. Créez un dépôt public sur GitHub.
2. Uploadez `index.html` à la racine.
3. Placez chaque jeu dans un sous-dossier avec ses propres fichiers.
4. Activez **GitHub Pages** (Settings > Pages > Branch = main, root).
5. Accédez à l’URL générée par GitHub (ex : `https://votrepseudo.github.io/nomduprojet/`)

### 🔐 Fonctionnalités FAFA
- Jeux responsive (mobile, tablette, desktop)
- Mode solo, famille, groupe, scolaire
- Succès débloquables, récompenses
- Sécurité anti-copie intégrée
- Administration centralisée via FAFA HQ™

---

## 🇬🇧 Instructions (EN)

### 🎯 Goal
This GitHub repo hosts multiple educational games accessible from a single multilingual homepage (`index.html`).

### 📁 Folder structure
Each game goes into its own folder:
```
/
├── index.html              ← Multilingual game selector
├── /atelier-fantome/
├── /galaxie-fafou/
└── ...
```

### 🚀 Deploy on GitHub Pages
1. Create a public GitHub repository.
2. Upload the `index.html` to the root.
3. Put each game inside its folder.
4. Enable GitHub Pages (Settings > Pages > branch = main, folder = root).
5. Access via the URL given by GitHub Pages.

---

## 📦 Ajout d’un nouveau jeu / Add a new game

1. Créer un nouveau dossier (ex: `/nouveau-jeu/`)
2. Mettre son `index.html`, fichiers JS, énigmes, etc.
3. Modifier `index.html` (portail) et ajouter une ligne dans `data[lang].games[]`

---

© FAFA HQ™ – Tous droits réservés / All rights reserved

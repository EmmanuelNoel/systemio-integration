# System.io API

Une API System.io avec une architecture propre et sécurisée.

## Description

Ce projet est une API REST construite avec Node.js et Express.js, implémentant une architecture propre et des mesures de sécurité robustes.

## Fonctionnalités

- Authentification sécurisée
- Gestion des entrées/sorties système
- Rate limiting
- Liste blanche d'IP
- Gestion des autorisations
- Génération de clés client

## Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn

## Installation

1. Clonez le repository :
```bash
git clone [url-du-repository]
cd system_io
```

2. Installez les dépendances :
```bash
npm install
```

3. Créez un fichier `.env` à la racine du projet et configurez vos variables d'environnement :
```env
PORT=3000
JWT_SECRET=votre_secret_jwt
# Autres variables d'environnement nécessaires
```

## Scripts disponibles

- `npm start` : Démarre l'application en mode production
- `npm run dev` : Démarre l'application en mode développement avec hot-reload

## Structure du projet

```
src/
├── app.js                 # Point d'entrée de l'application
├── config/               # Configuration de l'application
├── controllers/          # Contrôleurs de l'application
├── middlewares/         # Middlewares personnalisés
├── routes/              # Définition des routes
├── services/            # Logique métier
└── utils/               # Utilitaires
```

## Sécurité

Le projet implémente plusieurs mesures de sécurité :
- Rate limiting pour prévenir les attaques par force brute
- Liste blanche d'IP pour contrôler l'accès
- JWT pour l'authentification
- Helmet pour la sécurité des en-têtes HTTP
- CORS configuré
- Limitation des tentatives d'authentification

## Auteur

- Emmanuel SOUWOUIN

## Licence

ISC

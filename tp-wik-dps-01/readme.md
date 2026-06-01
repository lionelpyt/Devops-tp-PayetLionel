# TP DevOps

# WebServerJs

## Installation

### Prérequis
- Node.js
- npm

### Étapes

1. **Cloner le projet**
```bash
git clone "https://github.com/lionelpyt/Devops-tp-PayetLionel"
cd tp-wik-dps-01
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer l'environnement**

Créez le fichier `.env` et modifier le par :
```
PORT=3000
```

4. **Démarrer le serveur**
```bash
npm start
```

Le serveur écoute sur `http://localhost:3000`

## Utilisation

### Tester l'endpoint `/ping`

Réponse : Json (Headers).

### Autres routes (404)

Tous les autres endpoints retournent:

Une page 404 sans élements dans le body.


##  Scripts disponibles

- `npm start` - Démarrer le serveur

## Environnement

Variables d'environnement disponibles dans `.env`:
- `PORT` - Port du serveur (défaut: 3000)

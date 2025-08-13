# 📚 Guide d'Utilisation de l'API FoiConnectee

## 🎯 Vue d'Ensemble

L'API FoiConnectee est une API REST complète pour l'application de lecture biblique. Elle fournit des endpoints pour l'authentification, la gestion des utilisateurs, le contenu biblique, et les fonctionnalités personnelles.

## 🔐 Authentification

### Inscription d'un Utilisateur

```bash
POST /api/v1/auth/register
Content-Type: application/json

{
  "email": "john.doe@example.com",
  "password": "password123",
  "name": "John Doe",
  "role": "USER"
}
```

**Réponse de Succès (201):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "123e4567-e89b-12d3-a456-426614174000",
      "email": "john.doe@example.com",
      "name": "John Doe",
      "role": "USER",
      "isActive": true,
      "createdAt": "2024-01-15T10:30:00Z",
      "lastLogin": null
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  },
  "message": "Operation successful",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

### Connexion Utilisateur

```bash
POST /api/v1/auth/login
Content-Type: application/json

{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Réponse de Succès (200):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "123e4567-e89b-12d3-a456-426614174000",
      "email": "john.doe@example.com",
      "name": "John Doe",
      "role": "USER",
      "isActive": true,
      "createdAt": "2024-01-15T10:30:00Z",
      "lastLogin": "2024-01-15T10:30:00Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  },
  "message": "Operation successful",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

## 👥 Gestion des Utilisateurs

### Récupérer Tous les Utilisateurs

```bash
GET /api/v1/users
Authorization: Bearer <JWT_TOKEN>
```

**Réponse de Succès (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "123e4567-e89b-12d3-a456-426614174000",
      "email": "john.doe@example.com",
      "name": "John Doe",
      "role": "USER",
      "isActive": true,
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z",
      "lastLogin": "2024-01-15T10:30:00Z"
    }
  ],
  "message": "Operation successful",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

### Récupérer un Utilisateur par ID

```bash
GET /api/v1/users/123e4567-e89b-12d3-a456-426614174000
Authorization: Bearer <JWT_TOKEN>
```

### Mettre à Jour un Utilisateur

```bash
PATCH /api/v1/users/123e4567-e89b-12d3-a456-426614174000
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

{
  "name": "John Smith",
  "email": "john.smith@example.com"
}
```

## 📖 Contenu Biblique

### Récupérer Tous les Livres

```bash
GET /api/v1/bible/books
Authorization: Bearer <JWT_TOKEN>
```

**Réponse de Succès (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "genesis",
      "name": "Genèse",
      "testament": "OLD",
      "chapters": 50
    },
    {
      "id": "matthew",
      "name": "Matthieu",
      "testament": "NEW",
      "chapters": 28
    }
  ],
  "message": "Operation successful",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

### Récupérer un Chapitre

```bash
GET /api/v1/bible/books/genesis/chapters/1
Authorization: Bearer <JWT_TOKEN>
```

**Réponse de Succès (200):**
```json
{
  "success": true,
  "data": {
    "id": "genesis-1",
    "bookId": "genesis",
    "number": 1,
    "verses": [
      {
        "id": "genesis-1-1",
        "bookId": "genesis",
        "chapterId": "genesis-1",
        "number": 1,
        "text": "Au commencement, Dieu créa les cieux et la terre."
      }
    ]
  },
  "message": "Operation successful",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

### Rechercher des Versets

```bash
GET /api/v1/bible/search?query=Dieu
Authorization: Bearer <JWT_TOKEN>
```

**Réponse de Succès (200):**
```json
{
  "success": true,
  "data": {
    "verses": [
      {
        "id": "genesis-1-1",
        "bookId": "genesis",
        "chapterId": "genesis-1",
        "number": 1,
        "text": "Au commencement, Dieu créa les cieux et la terre."
      }
    ],
    "total": 1
  },
  "message": "Operation successful",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

## 📚 Plans de Lecture

### Créer un Plan de Lecture

```bash
POST /api/v1/reading-plans
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

{
  "title": "Lecture quotidienne de la Bible",
  "description": "Plan de lecture biblique sur 365 jours",
  "startDate": "2024-01-01T00:00:00Z",
  "endDate": "2024-12-31T23:59:59Z"
}
```

### Récupérer les Plans de Lecture

```bash
GET /api/v1/reading-plans
Authorization: Bearer <JWT_TOKEN>
```

## 📝 Notes et Surlignages

### Créer une Note

```bash
POST /api/v1/notes
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

{
  "verseId": "genesis-1-1",
  "content": "Ce verset parle de la création ex nihilo."
}
```

### Créer un Surlignage

```bash
POST /api/v1/highlights
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

{
  "verseId": "genesis-1-1",
  "color": "#FFD700"
}
```

## 🧪 Tests et Exemples

### Collection Postman

Téléchargez la collection Postman complète : [FoiConnectee_API.postman_collection.json](https://github.com/foiconnectee/api-collections)

### Tests avec cURL

#### Test d'Inscription
```bash
curl -X POST http://localhost:9200/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123",
    "name": "Test User"
  }'
```

#### Test de Connexion
```bash
curl -X POST http://localhost:9200/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

#### Test avec Token
```bash
curl -X GET http://localhost:9200/api/v1/users \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 📊 Codes de Statut HTTP

| Code | Signification | Description |
|------|---------------|-------------|
| 200 | OK | Requête réussie |
| 201 | Created | Ressource créée avec succès |
| 400 | Bad Request | Données de requête invalides |
| 401 | Unauthorized | Authentification requise |
| 403 | Forbidden | Accès refusé |
| 404 | Not Found | Ressource non trouvée |
| 409 | Conflict | Conflit (ex: email déjà utilisé) |
| 500 | Internal Server Error | Erreur interne du serveur |

## 🔒 Sécurité

- **JWT Tokens** : Valides 24h
- **Validation** : Toutes les données sont validées
- **CORS** : Configuré pour les origines autorisées
- **Rate Limiting** : Protection contre les abus

## 📈 Monitoring

- **Logs** : Toutes les requêtes sont loggées
- **Métriques** : Temps de réponse et taux d'erreur
- **Health Check** : `/health` pour vérifier l'état

## 🚀 Déploiement

### Variables d'Environnement

```bash
DATABASE_URL=postgresql://user:password@localhost:5432/foiconnectee
DIRECT_URL=postgresql://user:password@localhost:5432/foiconnectee
SUPABASE_JWT_SECRET=your-secret-key
ALLOWED_ORIGINS=http://localhost:3000,https://foiconnectee.com
```

### Docker

```bash
docker build -t foiconnectee-api .
docker run -p 9200:9200 foiconnectee-api
```

## 📞 Support

- **Documentation Swagger** : http://localhost:9200/api
- **Issues** : [GitHub Issues](https://github.com/foiconnectee/api/issues)
- **Email** : api-support@foiconnectee.com

---

*Dernière mise à jour : 2024-01-15* 
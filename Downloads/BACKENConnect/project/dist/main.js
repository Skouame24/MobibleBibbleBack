"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: {
            enableImplicitConversion: true,
        },
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('FoiConnectee - Bible App API')
        .setDescription(`
      # API Documentation pour FoiConnectee
      
      ## Description
      API backend complète pour l'application de lecture biblique FoiConnectee.
      
      ## Fonctionnalités
      - 🔐 **Authentification** : Inscription, connexion et gestion des sessions
      - 👥 **Gestion des utilisateurs** : Profils, rôles et permissions
      - 📖 **Contenu biblique** : Livres, chapitres et versets
      - 📝 **Fonctionnalités personnelles** : Notes, surlignages et favoris
      - 📚 **Plans de lecture** : Création et suivi de plans personnalisés
      - 💬 **Interactions sociales** : Commentaires, réactions et témoignages
      
      ## Authentification
      Toutes les routes protégées nécessitent un token JWT valide dans le header Authorization.
      
      ## Codes de réponse
      - **200** : Succès
      - **201** : Créé avec succès
      - **400** : Requête invalide
      - **401** : Non authentifié
      - **403** : Accès refusé
      - **404** : Ressource non trouvée
      - **500** : Erreur interne du serveur
    `)
        .setVersion('1.0.0')
        .setContact('FoiConnectee Team', 'https://foiconnectee.com', 'contact@foiconnectee.com')
        .setLicense('MIT', 'https://opensource.org/licenses/MIT')
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Entrez votre token JWT',
        in: 'header',
    }, 'JWT-auth')
        .addTag('Authentication', 'Endpoints pour l\'inscription et la connexion')
        .addTag('Users Management', 'Gestion des utilisateurs et profils')
        .addTag('Bible Content', 'Contenu biblique et recherche')
        .addTag('Reading Plans', 'Plans de lecture personnalisés')
        .addTag('Personal Features', 'Notes, surlignages et favoris')
        .addTag('Social Features', 'Commentaires, réactions et témoignages')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document, {
        swaggerOptions: {
            persistAuthorization: true,
            docExpansion: 'list',
            filter: true,
            showRequestDuration: true,
            tryItOutEnabled: true,
        },
        customSiteTitle: 'FoiConnectee API Documentation',
        customCss: `
      .swagger-ui .topbar { display: none }
      .swagger-ui .info .title { color: #2c3e50; font-size: 36px; }
      .swagger-ui .info .description { font-size: 16px; line-height: 1.6; }
    `,
    });
    app.setGlobalPrefix('api/v1');
    app.enableCors({
        origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'],
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
    });
    await app.listen(9200);
    console.log('🚀 FoiConnectee API démarrée sur le port 9200');
    console.log('📚 Documentation Swagger disponible sur: http://localhost:9200/api');
}
bootstrap();
//# sourceMappingURL=main.js.map
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Activation de la validation globale
  app.useGlobalPipes(new ValidationPipe());
  
  // Configuration Swagger
  const config = new DocumentBuilder()
    .setTitle('Bible App API')
    .setDescription('API Documentation for FoiConnectee')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Préfixe global pour les routes
  app.setGlobalPrefix('api/v1');
  
  // Activation CORS
  app.enableCors();
  
  await app.listen(9200);
}
bootstrap();
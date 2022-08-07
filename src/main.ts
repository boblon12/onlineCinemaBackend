import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
	const dev = process.env.NODE_ENV !== 'production';
	const port = process.env.PORT || 3000;
	const app = await NestFactory.create(AppModule);
	app.setGlobalPrefix('api');
	app.enableCors();
	app.listen(port);
}
bootstrap();

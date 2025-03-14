import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { ValidationPipe } from '@nestjs/common';

async function main() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //este pipe maneja que el endpoint no reciba mas data de la que esta definida que necesita ej: {id:"12314", name: "manuel"} son lo que se usa, pero se envio {id:"12314", name: "manuel", perro:"labrador"}, no va a tener en cuenta el perro
      forbidNonWhitelisted: true, //este pipe funciona en paralelo con whitelist, crea errores si se envia mas data de la que esta definida
    })
  );

  await app.listen(process.env.PORT ?? 3000 | 3001);
}

main();

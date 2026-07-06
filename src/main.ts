import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SERVICE_KEY } from './constants/serviceKey';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();
  const appPort = Number(process.env.PORT) || 3000;

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(appPort);

  console.log(
    `
  \t########     #######     ##    ##    ##     ##    ########
  \t##     ##   ##     ##    ###   ##    ##     ##       ##
  \t##     ##   ##     ##    ####  ##    ##     ##       ##
  \t##     ##   ##     ##    ## ## ##    ##     ##       ##
  \t##     ##   ##     ##    ##  ####    ##     ##       ##
  \t##     ##   ##     ##    ##   ###    ##     ##       ##
  \t########     #######     ##    ##     #######        ##
  `,
  );
  console.log(`\n\t\t    === ${SERVICE_KEY} service (─‿‿─) ===    \n`);

  console.log(
    `\n\t🚀 graphql ${SERVICE_KEY} service ready at http://localhost:${appPort}/graphql/ \n\t`,
  );

  // DONUT_INIT_SYSTEM=TRUE
  const initSystem = process.env.DONUT_INIT_SYSTEM || 'false';
  const isInit = initSystem.toLowerCase() == 'true';
  if (isInit == true) {
    console.log('start DONUT_INIT_SYSTEM --------');
  }
}
bootstrap();

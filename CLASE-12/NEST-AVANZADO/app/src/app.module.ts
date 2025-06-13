import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';

//* Importación para conectar a nuestra base de datos Mongo DG con la ODM Mongoose
import { MongooseModule } from '@nestjs/mongoose';

//* Importaciones para nuestro CONFIG - .ENV
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';

//* Importaciones para inyectar nuestros middlewares en nuestras routes
import { MiddlewareConsumer, NestModule, RequestMethod } from '@nestjs/common';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  // imports: [
  //   MongooseModule.forRoot(
  //     'mongodb://localhost:27017/nest-avanzado?directConnection=true',
  //   ),
  //   UsersModule,
  //   ProductsModule,
  // ],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('mongoUri'),
      }),
    }),
    UsersModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})


//* Configuración para aplicar nuestros middlewares a nuestras routes
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}

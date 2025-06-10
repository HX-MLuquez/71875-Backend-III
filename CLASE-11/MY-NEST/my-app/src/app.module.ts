import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ProductsModule, UsersModule], // -> Lista de todos los Módulos 
  controllers: [AppController], // (req - res) ->
  providers: [AppService], // lógica (services - providers)    Controllers requieren los services
})
export class AppModule {}

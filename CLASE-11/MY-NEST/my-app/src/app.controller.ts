import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // ->  "/"
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // -> "api"    -> http://localhost:3000/api
  getHello(): string {
    // return this.appService.getHello();
    const message = this.appService.getHello()
     return `
      <html>
        <head>
          <title>${message}</title>
          <style>
            body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
            button { padding: 10px 20px; font-size: 16px; }
          </style>
        </head>
        <body>
          <h1>${message}!!!</h1>
          <button onclick="location.href='/users'">Ver Usuarios</button>
        </body>
      </html>
    `;
  }
}

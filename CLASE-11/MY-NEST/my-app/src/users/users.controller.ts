import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Req,
  HttpException,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { Request } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    if (
      !createUserDto.first_name ||
      !createUserDto.last_name ||
      !createUserDto.email
    ) {
      throw new HttpException(
        'Los campos first_name, last_name y email son obligatorios',
        400,
      );
    }
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(@Query('limit') limit?: string) {
    const parsedLimit = limit ? parseInt(limit) : undefined;
    return this.usersService.findAll(parsedLimit);
  }

  @Get(':id') // http://localhost:3000/users/32
  findOne(@Param('id', ParseIntPipe) id: number) {
    if (isNaN(id) || id <= 0) {
      throw new HttpException('El ID debe ser un número entero positivo', 400);
    }
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }

  //* req {}
  @Get('view/test/:category')
  testDecoradorReq(@Req() req: Request) {
    // Accediendo a query params como en Express
    const category = req.params.category;
    const userId = req.query.userId;

    return `{Consulta con límite: ${userId}, categoría: ${category}}`;
    //-> http://localhost:3000/users/view/test/57?userId=321 <-
  }
}

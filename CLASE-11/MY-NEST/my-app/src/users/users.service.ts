import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = []; // users: Array<User>
  private nextId = 1;
  constructor() {}

  create(createUserDto: CreateUserDto): User {
    const newUser: User = {
      id: this.nextId++,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  // findAll(limit?: number): User[] {
  //   return limit ? this.users.slice(0, limit) : this.users;
  // }

  findAll(limit?: number): UpdateUserDto[] {
    const users = this.users.map((u) => {
      return {
        first_name: u.first_name,
        last_name: u.last_name,
      };
    });
    return limit ? users.slice(0, limit) : users;
  }

  findOne(id: number): User {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto): User {
    const user = this.findOne(id);
    Object.assign(user, updateUserDto);
    return user;
  }

  remove(id: number): void {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    this.users.splice(index, 1);
  }
}

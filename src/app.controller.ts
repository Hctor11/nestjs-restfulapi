import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Controller('user')
export class AppController {
  private users: any[] = [];

  @Get()
  getUsers(): any[] {
    return this.users;
  }

  @Post()
  createUser(@Body() newUser: any): string {
    if (!newUser.username || !newUser.email) {
      throw new HttpException(
        'Username and email are required fields',
        HttpStatus.BAD_REQUEST,
      );
    }
    this.users.push(newUser);
    return 'User created successfully';
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() updatedUser: any): string {
    this.users[id] = updatedUser;
    return `User with id ${id} was updated successfully`;
  }
}

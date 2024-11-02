import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create/one')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('find/all')
  findAll() {
    return this.usersService.findAll();
  }

  @Get('find/one/id/:id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOneById(id);
  }

  @Get('find/one/nickname/:nickname')
  findOneByNickName(@Param('nickname') nickname: string) {
    return this.usersService.findOneByNickName(nickname);
  }

  @Get('find/one/with/post/id/:id')
  findOneWithPosts(@Param('id') id: number) {
    return this.usersService.findOneWithPosts(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
}

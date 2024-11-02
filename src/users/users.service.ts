import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userEntity: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const record = this.userEntity.create(createUserDto);
      return await this.userEntity.save(record);
    } catch (err) {
      console.log('UsersService Error : ', err);
      throw new HttpException(err['message'], HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll() {
    try {
      return await this.userEntity.find();
    } catch (err) {
      console.log('UsersService Error : ', err);
      throw new HttpException(err['message'], HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOneById(id: number) {
    try {
      return await this.userEntity.findOneBy({ id });
    } catch (err) {
      console.log('UsersService Error : ', err);
      throw new HttpException(err['message'], HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOneByNickName(nickname: string) {
    try {
      return await this.userEntity.findOneBy({ nickname });
    } catch (err) {
      console.log('UsersService Error : ', err);
      throw new HttpException(err['message'], HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOneWithPosts(id: number) {
    try {
      return await this.userEntity.find({
        where: {
          id,
        },
        relations: ['post'],
      });
    } catch (err) {
      console.log('UsersService Error : ', err);
      throw new HttpException(err['message'], HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      return await this.userEntity.update({ id }, updateUserDto);
    } catch (err) {
      console.log('UsersService Error : ', err);
      throw new HttpException(err['message'], HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: number) {
    try {
      return await this.userEntity.delete({ id });
    } catch (err) {
      console.log('UsersService Error : ', err);
      throw new HttpException(err['message'], HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

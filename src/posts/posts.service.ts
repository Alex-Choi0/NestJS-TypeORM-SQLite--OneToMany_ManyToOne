import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostEntity } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postEntity: Repository<PostEntity>,
  ) {}
  async create(createPostDto: CreatePostDto) {
    try {
      const record = this.postEntity.create(createPostDto);
      return await this.postEntity.save(record);
    } catch (err) {
      console.log('PostsService Error : ', err);
      throw new HttpException(err['message'], HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll() {
    try {
      return await this.postEntity.find();
    } catch (err) {
      console.log('PostsService Error : ', err);
      throw new HttpException(err['message'], HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOneById(id: number) {
    try {
      return await this.postEntity.findOneBy({ id });
    } catch (err) {
      console.log('PostsService Error : ', err);
      throw new HttpException(err['message'], HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOneByIdWithUser(id: number) {
    try {
      return await this.postEntity.find({
        where: {
          id,
        },
        relations: ['user'],
      });
    } catch (err) {
      console.log('PostsService Error : ', err);
      throw new HttpException(err['message'], HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOneBytitle(title: string) {
    try {
      return await this.postEntity.findBy({ title: Like(`%${title}%`) });
    } catch (err) {
      console.log('PostsService Error : ', err);
      throw new HttpException(err['message'], HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    try {
      return await this.postEntity.update({ id }, updatePostDto);
    } catch (err) {
      console.log('PostsService Error : ', err);
      throw new HttpException(err['message'], HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: number) {
    try {
      return await this.postEntity.delete({ id });
    } catch (err) {
      console.log('PostsService Error : ', err);
      throw new HttpException(err['message'], HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

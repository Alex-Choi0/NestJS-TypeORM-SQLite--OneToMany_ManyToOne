import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get('find/one/id/:id')
  findOneById(@Param('id') id: number) {
    return this.postsService.findOneById(id);
  }

  @Get('find/one/with/user/id/:id')
  findOneByIdWithUser(@Param('id') id: number) {
    return this.postsService.findOneByIdWithUser(id);
  }

  @Get('find/one/title/:title')
  findOneByTitle(@Param('title') title: string) {
    return this.postsService.findOneBytitle(title);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.postsService.remove(id);
  }
}

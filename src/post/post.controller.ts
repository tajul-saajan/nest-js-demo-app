import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly service: PostService) {}
  @Get()
  async index() {
    return await this.service.getAll();
  }

  @Post()
  async store(@Body() dto: CreatePostDto) {
    return await this.service.create(dto);
  }
}

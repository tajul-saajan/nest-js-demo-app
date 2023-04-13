import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly repository: Repository<Post>,
  ) {}

  async getAll() {
    return await this.repository.find();
  }

  async create(dto: CreatePostDto) {
    const post = new Post();
    post.content = dto.content;
    return this.repository.save(post);
  }
}

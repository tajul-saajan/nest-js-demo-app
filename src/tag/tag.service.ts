import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from './tag.entity';
import { Repository } from 'typeorm';
import { CreateTagDto } from './dto/create-tag.dto';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag) private readonly repository: Repository<Tag>,
  ) {}

  async getAll() {
    return await this.repository.find({
      relations: {
        posts: true,
      },
    });
  }

  async create(dto: CreateTagDto) {
    const tag = new Tag();
    tag.name = dto.name;
    return await this.repository.save(tag);
  }
}

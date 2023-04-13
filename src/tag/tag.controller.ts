import { Body, Controller, Get, Post } from '@nestjs/common';
import { TagService } from './tag.service';
import { CreateTagDto } from './dto/create-tag.dto';

@Controller('tag')
export class TagController {
  constructor(private readonly service: TagService) {}

  @Get()
  async index() {
    return await this.service.getAll();
  }

  @Post()
  async store(@Body() dto: CreateTagDto) {
    return await this.service.create(dto);
  }
}

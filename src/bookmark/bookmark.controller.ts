import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { UpdateBookmarkDto } from './dto/update-bookmark.dto';

@Controller('bookmarks')
export class BookmarkController {
  constructor(private readonly service: BookmarkService) {}

  @Get('/')
  async index(
    @Query('title') title: string,
    @Query('desc') desc: string,
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    return await this.service.findAll(title, desc, page, limit);
  }

  @Post('/')
  async store(@Body() dto: CreateBookmarkDto) {
    return await this.service.create(dto);
  }

  @Get(':id')
  async show(@Param('id') id: number) {
    return await this.service.show(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: UpdateBookmarkDto) {
    return await this.service.update(id, dto);
  }

  @Delete(':id')
  async destroy(@Param('id') id: number) {
    return await this.service.destroy(id);
  }
}

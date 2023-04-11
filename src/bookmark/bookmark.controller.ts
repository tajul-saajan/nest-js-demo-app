import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { CreateBookmarkDto } from '../dto/create-bookmark-dto';
@Controller('bookmarks')
export class BookmarkController {
  constructor(private readonly service: BookmarkService) {}
  @Get('/')
  index() {
    return this.service.findAll();
  }

  @Post('/')
  store(@Body() dto: CreateBookmarkDto) {
    return this.service.create(dto);
  }
}

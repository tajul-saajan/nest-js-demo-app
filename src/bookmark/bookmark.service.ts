import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import Bookmark from './bookmark.entity';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BookmarkService {
  constructor(
    @InjectRepository(Bookmark)
    private readonly bookmarkRepository: Repository<Bookmark>,
  ) {}

  async findAll() {
    return await this.bookmarkRepository.find();
  }

  async create(dto: CreateBookmarkDto) {
    const bookmark = new Bookmark();
    bookmark.title = dto.title;
    bookmark.description = dto.description;
    bookmark.link = dto.link;
    return await this.bookmarkRepository.save(bookmark);
  }
}

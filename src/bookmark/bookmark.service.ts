import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import Bookmark from './bookmark.entity';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BookmarkService {
  constructor(
    @InjectRepository(Bookmark)
    private readonly repository: Repository<Bookmark>,
  ) {}

  async findAll(title?: string, desc?: string) {
    const query = this.repository.createQueryBuilder('bookmark');

    if (title) {
      await query.where('bookmark.title = :title', { title: title });
    }
    if (desc) {
      await query.where('bookmark.description like :desc', {
        desc: `%${desc}%`,
      });
    }
    return await query.getMany();
  }

  async create(dto: CreateBookmarkDto) {
    const bookmark = new Bookmark();
    bookmark.title = dto.title;
    bookmark.description = dto.description;
    bookmark.link = dto.link;
    return await this.repository.save(bookmark);
  }

  async show(id: number) {
    const bookmark = await this.repository.findOne({
      where: {
        id: id,
      },
    });

    if (!bookmark) throw new BadRequestException({ error: 'Data Not Found' });
    return bookmark;
  }

  async update(id: number, dto: CreateBookmarkDto) {
    const bookmark = await this.show(id);
    await this.repository.update(id, dto);
    return this.repository.preload(bookmark);
  }

  async destroy(id: number) {
    await this.show(id);
    return await this.repository.delete(id);
  }
}

import { Module } from '@nestjs/common';
import { BookmarkController } from './bookmark.controller';
import { BookmarkService } from './bookmark.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Bookmark from './bookmark.entity';

@Module({
  controllers: [BookmarkController],
  providers: [BookmarkService],
  imports: [BookmarkModule, TypeOrmModule.forFeature([Bookmark])],
})
export class BookmarkModule {}

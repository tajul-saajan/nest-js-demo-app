import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { BookmarkModule } from '../bookmark/bookmark.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';

@Module({
  controllers: [PostController],
  providers: [PostService],
  imports: [BookmarkModule, TypeOrmModule.forFeature([Post])],
})
export class PostModule {}

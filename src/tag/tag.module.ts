import { Module } from '@nestjs/common';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from './tag.entity';

@Module({
  controllers: [TagController],
  providers: [TagService],
  imports: [TagModule, TypeOrmModule.forFeature([Tag])],
})
export class TagModule {}

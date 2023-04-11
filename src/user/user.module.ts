import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from '../auth/user.entity';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [UserModule, TypeOrmModule.forFeature([User])],
})
export class UserModule {}

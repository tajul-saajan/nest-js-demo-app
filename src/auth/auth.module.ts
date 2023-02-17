import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from './user.entity';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [UserModule, TypeOrmModule.forFeature([User])],
})
export class AuthModule {}

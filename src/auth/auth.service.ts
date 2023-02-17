import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user-dto';
import { UserSignInDto } from '../dto/user-signin-dto';
import userEntity from './user.entity';

@Injectable({})
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async signUp(dto: CreateUserDto) {
    // return dto;
    const user = new User();
    user.email = dto.email;
    user.password = dto.password;
    user.full_name = dto.full_name;
    return await this.userRepository.save(user);
  }

  async signIn(dto: UserSignInDto) {
    const user = await this.userRepository.findOne({
      where: { email: dto.email },
    });

    if (!user) throw new UnprocessableEntityException('user does not exist');
    if (user.password !== dto.password)
      throw new UnprocessableEntityException('email password mismatch');

    return user;
  }
}

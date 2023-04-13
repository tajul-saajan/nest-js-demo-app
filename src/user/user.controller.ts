import { UserService } from './user.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserSigninDto } from './dto/user-signin.dto';

@Controller('auth')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get('users')
  async index() {
    return await this.service.findAll();
  }

  @Post('signup')
  signUp(@Body() createDto: CreateUserDto) {
    return this.service.signUp(createDto);
  }

  @Post('signin')
  signIn(@Body() signInDto: UserSigninDto) {
    // return signInDto;
    return this.service.signIn(signInDto);
  }
}

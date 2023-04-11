import { UserService } from './user.service';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user-dto';
import { UserSignInDto } from '../dto/user-signin-dto';

@Controller('auth')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post('signup')
  signUp(@Body() createDto: CreateUserDto) {
    return this.service.signUp(createDto);
  }

  @Post('signin')
  signIn(@Body() signInDto: UserSignInDto) {
    // return signInDto;
    return this.service.signIn(signInDto);
  }
}

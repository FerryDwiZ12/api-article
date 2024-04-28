import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from './auth/auth.interface';
import { Public } from 'src/helpers/decorectors/public.decorector';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('register')
  async register(@Body() user: User) {
    return this.authService.register(user);
  }
  
  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() user: User) {
    return this.authService.login(user);
  }
}

import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { GoogleLoginService } from './google-login.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('google')
export class GoogleLoginController {
  constructor(private readonly googleLoginService: GoogleLoginService) {}
  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.googleLoginService.googleLogin(req)
  }
}

import { Controller, Get, Req, UseGuards, Render } from '@nestjs/common';
import { GoogleLoginService } from './google-login.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('google')
export class GoogleLoginController {
  constructor(private readonly googleLoginService: GoogleLoginService) {}
  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('redirect')
  @Render('./User/home')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    const user = this.googleLoginService.googleLogin(req);
    console.log(user);
    return user;
  }
}

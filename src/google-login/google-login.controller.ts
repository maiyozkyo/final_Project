import { Controller, Get, Req, UseGuards, Render, Redirect } from '@nestjs/common';
import { GoogleLoginService } from './google-login.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('google')
export class GoogleLoginController {
  constructor(private readonly googleLoginService: GoogleLoginService) {}
  @Get()
  @UseGuards(AuthGuard('google'))
  async signInWithGoogle(@Req() req) {}

  @Get('redirect')
  @Redirect('/home')
  @UseGuards(AuthGuard('google'))
  async signInWithGoogleRedirect(@Req() req) {
    const user = this.googleLoginService.signInWithGoogle(req).then(token => { return token});
    user.then(function(result){
      console.log(result);
    })
    
  }
}

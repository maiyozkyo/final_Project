import { Controller, Get,UseGuards, Req, Render, Request ,Post } from '@nestjs/common';
import { UserProfileService } from './user-profile.service';
import { AuthGuard } from '@nestjs/passport';
import { GoogleLoginService } from 'src/google-login/google-login.service';
import { JwtAuthGuard } from 'src/google-login/jwt-auth.guard';
import { LocalAuthGuard } from 'src/google-login/local-auth.guard';

@Controller('/profile')
export class UserProfileController {
  constructor(private readonly userProfileService: UserProfileService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @Render("./User/userProfile")
  getProfile(@Request() req) {
    return {user: req.user};
  }
}

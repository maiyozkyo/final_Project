import { Controller, Get,UseGuards, Req, Render, Request ,Post } from '@nestjs/common';
import { UserProfileService } from './user-profile.service';
import { AuthGuard } from '@nestjs/passport';
import { GoogleLoginService } from 'src/google-login/google-login.service';
import { JwtAuthGuard } from 'src/google-login/jwt-auth.guard';
import { LocalAuthGuard } from 'src/google-login/local-auth.guard';
import { AuthenticatedGuard } from 'src/user-login/authenticated.guard';
@Controller('/profile')
export class UserProfileController {
  constructor(private readonly userProfileService: UserProfileService) {}

  @Get()
  @UseGuards(AuthenticatedGuard)
  @Render("./User/userProfile")
  getProfile(@Request() req) {
    console.log(req.user)
    return req.user;
  }
}

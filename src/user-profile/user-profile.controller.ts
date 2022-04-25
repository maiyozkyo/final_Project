import { Controller, Get,UseGuards, Render, Request } from '@nestjs/common';
import { UserProfileService } from './user-profile.service';
import { AuthenticatedGuard } from 'src/Guards/authenticated.guard';

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

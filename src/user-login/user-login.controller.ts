import { Controller, Get, Render, Request, Post, UseGuards, Body, Redirect, Res, Req } from '@nestjs/common';
import { UserLoginService } from './user-login.service';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtService } from '@nestjs/jwt';
import { createUserDto } from 'src/DTO/createUser.dto';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { LoginGuard } from './login.guard';
@Controller('/login')
export class UserLoginController {
  constructor(
    private readonly userLoginService: UserLoginService,
    private jwtService: JwtService) {}

  @Get()
  @Render('./User/login')
  root(@Req() req, @Res() res: Response){
    return;
  }

  @Post()
  @UseGuards(LoginGuard)
  @Render("./User/home")
  async login(@Body() user, @Req() req) {
    const products = await this.userLoginService.get_All_Products(0,9).then();
    const foundUser = await this.userLoginService.verifyUser(user.username, user.password);
    if (!foundUser) return { url: '/login' };
    const payload = {name: foundUser.user_username, sub:foundUser.user_id};
    const accessToken = this.jwtService.sign(payload);
    req.user = foundUser;
    return {products, user: foundUser};
  }

}

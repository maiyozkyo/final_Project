import { Controller, Get, Post, Render, Redirect } from '@nestjs/common';
import { AdminLoginService } from './admin-login.service';

@Controller('admin/login')
export class AdminLoginController {
  constructor(private readonly adminLoginService: AdminLoginService) {}
  @Get()
  @Render('./Admin/login')
  root(){

  }

  //@Get('/logout')
  
}

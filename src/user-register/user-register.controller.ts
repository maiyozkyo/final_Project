import { Controller, Get, Render, Post } from '@nestjs/common';
import { UserRegisterService } from './user-register.service';

@Controller('/register')
export class UserRegisterController {
  constructor(private readonly userRegisterService: UserRegisterService) {}

  @Get()
  @Render('./User/register')
  root(){
    
  }
}

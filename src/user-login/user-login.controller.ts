import { Controller, Get, Render } from '@nestjs/common';
import { UserLoginService } from './user-login.service';

@Controller('/login')
export class UserLoginController {
  constructor(private readonly userLoginService: UserLoginService) {}

  @Get()
  @Render('./User/login')
  root(){
    
  }
}

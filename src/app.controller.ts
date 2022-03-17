import { Controller, Get, Render, Request, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('./User/home')
  root(@Request() req: Request){
    
  }

  @Post('/admin')
  @Render('./User/home')
  test(){

  }
}

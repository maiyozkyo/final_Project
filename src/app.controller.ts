import { Controller, Get, Render, Request, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('./User/home')
  root(@Request() req: Request){
    
  }

  @Get('/cart')
  @Render('./User/cart')
  Cart(){}

  @Post('/admin')
  @Render('./User/home')
  test(){

  }
}

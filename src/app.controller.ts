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


  @Get('/product')
  @Render('./User/product')
  productRouter(@Request() req: Request){
    console.log(req);
    
  }

  @Get('/about')
  @Render('./User/about')
  aboutRouter(@Request() req: Request){
    console.log(req);
    
  }

  @Get('/why')
  @Render('./User/why')
  whyRouter(@Request() req: Request){
    console.log(req);
    
}

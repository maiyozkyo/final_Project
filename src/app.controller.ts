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

<<<<<<< HEAD
  @Get('/product/detail')
  @Render('./User/productDetail')
  detailRouter(@Request() req: Request){
    console.log(req);
  }
=======
  
>>>>>>> 2f25ea6c26c9935b9ab7787356a1386fc6b345b4
}


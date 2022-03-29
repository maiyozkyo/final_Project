import { Controller, Get, Render, Request, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Product } from './Entities/Product';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('./User/home')
  root(@Request() req: Request){
    
  }

  @Get('./test')
  async getHello(): Promise<Product[]>{
      return this.appService.getAll();
  }
 
}


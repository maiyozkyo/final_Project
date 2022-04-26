import { Controller, Get, Redirect, Render, Post, Req } from '@nestjs/common';
import { AdminHomeService } from './admin-home.service';

@Controller('admin')
export class AdminHomeController {
  constructor(private readonly adminHomeService: AdminHomeService) {}

  @Get()
  @Render('./Admin/home')
  root(){
  }

  @Get('listProduct')
  async getListProducts(){
    const products = await this.adminHomeService.get_All_Products();
    return products;
  }

  @Get('/accounts')
  @Render('./Admin/accounts')
  account(){

  }

  @Get('/manages')
  @Render('./Admin/manage-users')
  manageAccount(){

  }

  @Get('/manages/user-detail')
  @Render('./Admin/user-detail')
  viewAccount(){

  }

  @Post()
  @Redirect('./Admin/home')
  @Render('./Admin/home')
  login() {

  }

  
}

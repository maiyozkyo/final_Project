import { Controller, Get, Redirect, Render, Post } from '@nestjs/common';
import { AdminHomeService } from './admin-home.service';

@Controller('admin')
export class AdminHomeController {
  constructor(private readonly adminHomeService: AdminHomeService) {}

  @Get()
  @Render('./Admin/home')
  root(){

  }

  @Get('/accounts')
  @Render('./Admin/accounts')
  account(){

  }

  @Get('/manages')
  @Render('./Admin/manage-users')
  manageAccount(){}

  @Get('/addProduct')
  @Render('./Admin/add-product')
  addProduct(){

  }

  @Get('/editProduct')
  @Render('./Admin/edit-product')
  editProduct(){

  }

  @Get('/login')
  @Render('./Admin/login')
  login(){

  }


  //@Get('/logout')
  @Post('/admin')
  @Redirect('./Admin/login')
  logout() {

  }

  @Get('/products')
  @Render('./Admin/products')
  products(){

  }


}

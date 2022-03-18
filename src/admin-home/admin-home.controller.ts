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
  manageAccount(){

  }

  @Post()
  @Redirect('./Admin/home')
  @Render('./Admin/home')
  login() {

  }

  
}

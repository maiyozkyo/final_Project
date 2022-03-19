import { Controller, Get, Post, Render, Redirect } from '@nestjs/common';
import { AdminUserDetailService } from './admin-user-detail.service';

@Controller('admin/manages/user-detail')
export class AdminUserDetailController {
  constructor(private readonly adminUserDetailService: AdminUserDetailService) {}

  @Get()
  @Render('./Admin/user-detail')
  root(){ }
}
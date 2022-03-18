import { Controller, Get, Post, Render, Redirect } from '@nestjs/common';
import { AdminManagementService } from './admin-management.service';

@Controller('admin/manages')
export class AdminManagementController {
  constructor(private readonly adminManagementService: AdminManagementService) {}
  @Get()
  @Render('./Admin/manage-users')
  root(){ }

  @Get('/view')
  view(){}
}
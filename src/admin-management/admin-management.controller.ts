import { Controller, Get, Post, Render, Redirect, Param } from '@nestjs/common';
import { AdminManagementService } from './admin-management.service';

@Controller('admin/manages')
export class AdminManagementController {
  constructor(private readonly adminManagementService: AdminManagementService) {}
  @Get()
  @Render('./Admin/manage-users')
  async root(){
    const users = await this.adminManagementService.getAllUsers();
    return { users: users };
  }

  @Get('/del/:id')
  @Redirect('/admin/manages')
  async view(@Param('id') id){
    return await this.adminManagementService.deleteById(id);
  }
}
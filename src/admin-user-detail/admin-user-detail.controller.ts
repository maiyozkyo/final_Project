import { Controller, Get, Post, Render, Redirect, Body, Param } from '@nestjs/common';
import { AdminUserDetailService } from './admin-user-detail.service';

@Controller('admin/manages/user-detail')
export class AdminUserDetailController {
  constructor(private readonly adminUserDetailService: AdminUserDetailService) {}

  @Get('/:id')
  @Render('./Admin/user-detail')
  async root(@Param('id') id){
    const user = await this.adminUserDetailService.getUser(id);
    return {user:user};
  }

  @Post()
  async Delete(@Body() body){
    await this.adminUserDetailService.deleteById(body.user_id);
  }
}
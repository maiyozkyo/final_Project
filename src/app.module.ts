import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminHomeModule } from './admin-home/admin-home.module';
import { AdminProductModule } from './admin-product/admin-product.module';
import { AdminLoginModule } from './admin-login/admin-login.module';
import { AdminManagementModule } from './admin-management/admin-management.module';
import { AdminUserDetailModule } from './admin-user-detail/admin-user-detail.module';

@Module({
  imports: [AdminHomeModule, AdminProductModule, AdminLoginModule, AdminManagementModule, AdminUserDetailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

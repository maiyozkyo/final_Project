import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminHomeModule } from './admin-home/admin-home.module';
import { AdminProductModule } from './admin-product/admin-product.module';
import { AdminLoginModule } from './admin-login/admin-login.module';
import { AdminManagementModule } from './admin-management/admin-management.module';
import { AdminUserDetailModule } from './admin-user-detail/admin-user-detail.module';
import { UserProductModule } from './user-product/user-product.module';
import { AdminOrderListModule } from './admin-order-list/admin-order-list.module';
import { UserHomeModule } from './user-home/user-home.module';
import { UserProductDetailModule } from './user-product-detail/user-product-detail.module';
import { UserAboutModule } from './user-about/user-about.module';
import { UserWhyModule } from './user-why/user-why.module';
import { UserCartModule } from './user-cart/user-cart.module';
import { UserTestModule } from './user-test/user-test.module';


@Module({
  imports: [
    AdminHomeModule,
    AdminProductModule,
    AdminLoginModule,
    UserProductModule,
    AdminOrderListModule,
    UserHomeModule,
    UserProductDetailModule,
    UserAboutModule,
    UserWhyModule,
    UserCartModule,
    UserTestModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {
  
}

import { Module } from '@nestjs/common';
import { UserProductDetailService } from './user-product-detail.service';
import { UserProductDetailController } from './user-product-detail.controller';

@Module({
  controllers: [UserProductDetailController],
  providers: [UserProductDetailService]
})
export class UserProductDetailModule {}

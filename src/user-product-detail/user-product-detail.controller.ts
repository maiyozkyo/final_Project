import { Controller, Get, Render } from '@nestjs/common';
import { UserProductDetailService } from './user-product-detail.service';

@Controller('/detail')
export class UserProductDetailController {
  constructor(private readonly userProductDetailService: UserProductDetailService) {}
  @Get()
  @Render("./User/productDetail")
  root(){}
}

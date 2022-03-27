import { Controller, Get, Render, Request } from '@nestjs/common';
import { UserProductService } from './user-product.service';

@Controller('/product')
export class UserProductController {
  constructor(private readonly userProductService: UserProductService) {}

  @Get()
  @Render('./User/product')
  root(@Request() req: Request){
    console.log(req);
  }

  @Get('/detail')
  @Render('./User/productDetail')
  detailRouter(@Request() req: Request){
    console.log(req);
  }
}

import { Controller, Get, Render, Request } from '@nestjs/common';
import { UserProductService } from './user-product.service';

@Controller('/product')
export class UserProductController {
  constructor(private userService: UserProductService){

  }
  @Get()
  @Render('./User/product')
  root(@Request() req: Request){
    return {prod_img: "/img/p1.png", prod_name: "canon m50", prod_price: 1000, prod_rating: this.userService.renderRating(5)}
  }

  @Get('/detail')
  @Render('./User/productDetail')
  detailRouter(@Request() req: Request){
    console.log(req);
  }
}

import { Controller, Get, Render, Request, Query, Redirect, UsePipes, ValidationPipe, Body, Post, Req, Param} from '@nestjs/common';
import { createProductDto } from 'src/DTO/createProduct.dto';
import { createTypeDto } from 'src/DTO/createType.dto';

import { Product } from 'src/Entities/Product';
import { UserProductService } from './user-product.service';

@Controller('/product')
export class UserProductController {
  constructor(private userService: UserProductService){

  }
  @Get()
  @Render('./User/product')
  async root(@Query() query){

    const prods = await this.userService.get_All_Products(0,9).then();
    console.log(prods);
    return {prods};
  }

  @Get('?page')
  @Render('./User/product')
  async paginiation(@Query() query){
    let {page} = query.query;
    const prods = await this.userService.get_All_Products(0,9).then();
    console.log(prods);
    return {prods};
  }

  @Get('/detail')
  @Render('./User/productDetail')
  detailRouter(@Request() req: Request){
    console.log(req);
  }
}

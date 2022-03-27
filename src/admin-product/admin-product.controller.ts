import { Controller, Get, Render, Request, Query, Redirect, UsePipes, ValidationPipe, Body, Post, Req, Param} from '@nestjs/common';
import { createProductDto } from 'src/DTO/createProduct.dto';
import { createTypeDto } from 'src/DTO/createType.dto';

import { Product } from 'src/Entities/Product';
import { AdminProductService } from './admin-product.service';


@Controller('admin/products')
export class AdminProductController {

  constructor(private readonly adminProductService: AdminProductService) {}

  @Get()
  @Render('./Admin/products')
  async root(@Query() query){
    const prods = await this.adminProductService.get_All_Products().then();
    const categories = await this.adminProductService.get_All_Type().then();    
    return {products: prods, types: categories};
  }

  @Post()
  @Redirect('/admin/products')
  async DeleteProduct(@Body() body){
    const pid:number = body.prod_id;
    
    if (pid !== undefined) {
      await this.adminProductService.delete_Product(pid);
    }

    const prods = await this.adminProductService.get_All_Products().then();
    const categories = await this.adminProductService.get_All_Type().then();
    return {products: prods, types: categories};
  }

  @Get('add')
  @Render('./Admin/add-product')
  @Redirect('/admin/products')
  @UsePipes(ValidationPipe)
  async add_NewProduct(@Query() new_Product:createProductDto){
    const categories = await this.adminProductService.get_All_Type().then();
    if (new_Product.product_name) {
      this.adminProductService.create_Product(new_Product);
      const prods = await this.adminProductService.get_All_Products().then();
      return {products: prods, types: categories};
    }
      return {types: categories};
  }

  @Get('/edit')
  @Render('./Admin/edit-product')
  editProduct(){

  }

  @Get('/category')
  @Render('./Admin/products')
  @Redirect('/admin/products')
  @Render('/admin/products')
  @UsePipes(ValidationPipe)
  async addCategory(@Query() new_Type:createTypeDto){
    const categories = await this.adminProductService.get_All_Type().then();
    const prods = await this.adminProductService.get_All_Products().then();

    if (new_Type.type_name){
      await this.adminProductService.create_Type(new_Type);
      const categories = await this.adminProductService.get_All_Type().then();
      return {products: prods, types: categories};
    }
    return {products: prods, types: categories};

  }

  @Get('category/:type_name')
  @Render('./Admin/products')
  @Redirect('/admin/products')
  async DeleteType(@Param() param){
    const type_name = param.type_name;
    if (type_name !== undefined) {
      await this.adminProductService.delete_Type(type_name);

    }
    const prods = await this.adminProductService.get_All_Products().then();
    const categories = await this.adminProductService.get_All_Type().then();
    return {products: prods, types: categories};
  }
}

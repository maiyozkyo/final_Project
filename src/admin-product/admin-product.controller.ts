import { Controller, Get, Render } from '@nestjs/common';
import { AdminProductService } from './admin-product.service';

@Controller('admin/products')
export class AdminProductController {
  constructor(private readonly adminProductService: AdminProductService) {}

  @Get()
  @Render('./Admin/products')
  root(){

  }

  @Get('/add')
  @Render('./Admin/add-product')
  addProduct(){

  }

  @Get('/edit')
  @Render('./Admin/edit-product')
  editProduct(){

  }

}

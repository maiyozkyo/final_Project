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
<<<<<<< HEAD
<<<<<<< HEAD
  @Redirect('/admin/products')
  @UsePipes(ValidationPipe)
  async add_NewProduct(@Query() query){
    const categories = await this.adminProductService.get_All_Type().then();
    if (query.length) {
      const new_Product:createProductDto = query;
      this.adminProductService.create_Product(new_Product);
      const prods = await this.adminProductService.get_All_Products().then();
      return {products: prods, types: categories};
    }
      return {types: categories};
=======
  addProduct(){

>>>>>>> parent of f23b024 (create product and category: table, dto, relationship. Add services: crd (missing u) for admin product)
=======
  addProduct(){

>>>>>>> parent of f23b024 (create product and category: table, dto, relationship. Add services: crd (missing u) for admin product)
  }

  @Get('/edit')
  @Render('./Admin/edit-product')
  editProduct(){

  }

}

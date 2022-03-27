import { Type } from './../Entities/Type';
import { createProductDto } from './../DTO/createProduct.dto';
import { createTypeDto } from './../DTO/createType.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/Entities/Product';
import { Repository } from 'typeorm';

@Injectable()
export class AdminProductService {
    constructor(
        @InjectRepository(Product) private productRepo: Repository<Product>,
        @InjectRepository(Type) private typeRepo: Repository<Type>,

    ) {}
    
    get_All_Products(): Promise<Product[]> {
        return this.productRepo.find();
    }

    async get_One_Product_By_Id(id: number): Promise<Product> {
        try {
            return this.productRepo.findOneOrFail(id);
        } catch (error) {
            //i dont know how to handle this
            throw error;
        }
    }

    create_Product(ProductDto : createProductDto){
        const new_Product = this.productRepo.create(ProductDto);
        return this.productRepo.save(new_Product);
    }

    async update_Product(product: Product): Promise<Product> {
        const current_Product = await this.get_One_Product_By_Id(product.id);
        return this.productRepo.save(current_Product);
    }

    async delete_Product(id: number): Promise<Product> {
        const current_Product = await this.get_One_Product_By_Id(id);
        return await this.productRepo.remove(current_Product);
    }

    custom_Query():any {
        return this.productRepo.createQueryBuilder("product").select('*')
    }

    get_All_Type(): Promise<Type[]> {
        return this.typeRepo.find();
    }

    async get_One_type_By_Name(name: string): Promise<Type> {
        try {
            return this.typeRepo.findOneOrFail(name);
        } catch (error) {
            //i dont know how to handle this
            throw error;
        }
    }

    create_Type(TypeDto : createTypeDto){
        const new_Type = this.typeRepo.create(TypeDto);
        return this.typeRepo.save(new_Type);
    }

    async update_Type(name: string): Promise<Type> {
        const current_Product = await this.get_One_type_By_Name(name);
        return this.typeRepo.save(current_Product);
    }

    async delete_Type(name: string): Promise<Type> {
        const current_Product = await this.get_One_type_By_Name(name);
        return await this.typeRepo.remove(current_Product);
    }


}

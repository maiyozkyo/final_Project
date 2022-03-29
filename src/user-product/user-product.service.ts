import { Type } from './../Entities/Type';
import { createProductDto } from './../DTO/createProduct.dto';
import { createTypeDto } from './../DTO/createType.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/Entities/Product';
import { Repository } from 'typeorm';



@Injectable()
export class UserProductService {
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

    renderRating(stars = 0): string{
        let rating_inner_html = ``
        for (let i = 0; i < stars; i++){
            rating_inner_html += `<i class="fa fa-star" aria-hidden="true"></i>`
        }
        return rating_inner_html;
    }
}

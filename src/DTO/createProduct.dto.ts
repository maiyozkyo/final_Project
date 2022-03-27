import { Type } from './../Entities/Type';
import {IsNotEmpty, IsEmail, Min, IsDate} from 'class-validator'

export class createProductDto {
    @IsNotEmpty()
    product_name: string;

    @IsNotEmpty()
    brand: string;
    describe: string;

    @IsNotEmpty()
    category: Type;

    @IsNotEmpty()
    @Min(0)
    in_stock: number;
    
    @IsNotEmpty()
    @Min(0)
    price: number;

    @IsNotEmpty()
    @IsDate()
    import_date: Date;

    @IsNotEmpty()
    unit: string;
}
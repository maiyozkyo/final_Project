import { Type } from './../Entities/Type';


export class createProductDto {
    
    product_name: string;
    brand: string;
    describe: string;
    category: Type;
    in_stock: number;
    price: number;
    import_date: Date;
    unit: string;
}
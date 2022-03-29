import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './Entities/Product';
@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Product) private usersRespository: Repository<Product>,
  ) {}
  
  getAll(): Promise<Product[]>{
    return this.usersRespository.find();
  }

  async getById(id: number) {
    try{
      const prod = await this.usersRespository.findOneOrFail(id);
      return prod;
    }catch(err){
      throw err;
    }
  }
}

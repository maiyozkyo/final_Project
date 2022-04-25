import { User } from 'src/Entities/User';
import { Product } from 'src/Entities/Product';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserCartService {
    constructor (
        @InjectRepository(Product) private productRepo: Repository<Product>,
        @InjectRepository(User) private userRepo: Repository<User>,
    ) {}

}

import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from 'src/Entities/User';
import { InjectRepository } from '@nestjs/typeorm';
const bcrypt = require('bcryptjs');

@Injectable()
export class AdminManagementService {
    constructor(
        @InjectRepository(User) private userRepo: Repository<User>,
    ) {}

    getAllUsers() : Promise<User[]> {
        return  this.userRepo.find();
    }

    async deleteById(id:number){
       await this.userRepo.delete(id);
    }
}
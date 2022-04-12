import { Injectable } from '@nestjs/common';

@Injectable()
<<<<<<< Updated upstream
export class AdminManagementService {}
=======
export class AdminManagementService {
    constructor(
        @InjectRepository(User) private userRepo: Repository<User>,
    ) {}

    getAllUsers() : Promise<User[]> {
        return  this.userRepo.find();
    }

    async getAllUsersByPage(offset, limit) : Promise<User[]> {
        const [result, total] = await this.userRepo.findAndCount({
            take: limit, 
            skip: offset
        })
        return result;
    }

    async getTotalUsers():Promise<number>{
        const [result, total] = await this.userRepo.findAndCount({
            
        })
        return total;
    }

    async deleteById(id:number){
       await this.userRepo.delete(id);
    }
}
>>>>>>> Stashed changes

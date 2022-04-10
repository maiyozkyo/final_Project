import { Injectable } from '@nestjs/common';

<<<<<<< Updated upstream
@Injectable()
export class UserRegisterService {}
=======
    registerUser(user: createUserDto){
        console.log(user);
        user.user_password = this.hashPassword(user.user_password)
        this.userRepo.create(user)
        return this.userRepo.save(user)
    }

    hashPassword(password: string): string {
        const hash = bcrypt.hashSync(password, 10);
        return hash;
    }
}
>>>>>>> Stashed changes

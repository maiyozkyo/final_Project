import { Controller } from '@nestjs/common';
import { UserRegisterService } from './user-register.service';

@Controller('user-register')
export class UserRegisterController {
  constructor(private readonly userRegisterService: UserRegisterService) {}
}

import { Module } from '@nestjs/common';
import { UserRegisterService } from './user-register.service';
import { UserRegisterController } from './user-register.controller';

@Module({
  controllers: [UserRegisterController],
  providers: [UserRegisterService]
})
export class UserRegisterModule {}

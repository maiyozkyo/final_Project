import { Module } from '@nestjs/common';
import { GoogleLoginService } from './google-login.service';
import { GoogleLoginController } from './google-login.controller';
import { GoogleStrategy } from './google.strategy';

@Module({
  controllers: [GoogleLoginController],
  providers: [GoogleLoginService, GoogleStrategy]
})
export class GoogleLoginModule {}

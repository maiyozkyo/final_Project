import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminHomeModule } from './admin-home/admin-home.module';

@Module({
  imports: [AdminHomeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

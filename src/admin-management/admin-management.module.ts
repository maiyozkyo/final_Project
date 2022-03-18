import { Module } from '@nestjs/common';
import { AdminManagementService } from './admin-management.service';
import { AdminManagementController } from './admin-management.controller';

@Module({
  controllers: [AdminManagementController],
  providers: [AdminManagementService]
})
export class AdminManagementModule {}

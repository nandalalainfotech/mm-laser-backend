import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeaveApplicationController } from '../controller/leave-application.controller';
import { Leaveapp001hb } from '../entity/Leaveapp001hb';
import { Leaveapp001mb } from '../entity/Leaveapp001mb';
import { LeaveApplicationService } from '../service/leave-application.service';

@Module({
  imports: [TypeOrmModule.forFeature([Leaveapp001mb,Leaveapp001hb])],
  providers: [LeaveApplicationService],
  controllers: [LeaveApplicationController],
})
export class LeaveApplicationModule {}

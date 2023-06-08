import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeaveTypeController } from '../controller/leave-type.controller';
import { Leavetype001hb } from '../entity/Leavetype001hb';
import { Leavetype001mb } from '../entity/Leavetype001mb';
import { LeaveTypeService } from '../service/leave-type.service';

@Module({
  imports: [TypeOrmModule.forFeature([Leavetype001mb,Leavetype001hb])],
  providers: [LeaveTypeService],
  controllers: [LeaveTypeController],
})
export class LeaveTypeModule {}

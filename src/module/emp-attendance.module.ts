import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpAttendanceController } from '../controller/emp-attendance.controller';
import { Empattendance001hb } from '../entity/Empattendance001hb';
import { Empattendance001mb } from '../entity/Empattendance001mb';
import { EmpAttendanceService } from '../service/emp-attendance.service';

@Module({
    imports: [TypeOrmModule.forFeature([Empattendance001mb,Empattendance001hb])],
    providers: [EmpAttendanceService],
    controllers: [EmpAttendanceController],
})
export class EmpAttendanceModule { }
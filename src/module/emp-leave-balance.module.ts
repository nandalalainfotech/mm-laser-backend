import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeLeaveBalanceController } from '../controller/emp-leave-balance.controller';
import { Empleavebalance001hb } from '../entity/Empleavebalance001hb';
import { Empleavebalance001mb } from '../entity/Empleavebalance001mb';
import { EmployeeLeaveBalanceService } from '../service/emp-leave-balance.service';

@Module({
    imports: [TypeOrmModule.forFeature([Empleavebalance001mb,Empleavebalance001hb])],
    providers: [EmployeeLeaveBalanceService],
    controllers: [EmployeeLeaveBalanceController],
})
export class EmployeeLeaveBalanceModule { }
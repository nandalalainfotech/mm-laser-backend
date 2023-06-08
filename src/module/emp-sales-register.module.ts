import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeSalesRegisterController } from '../controller/emp-sales-register.controller';
import { Empsalaryregister001hb } from '../entity/Empsalaryregister001hb';
import { Empsalaryregister001mb } from '../entity/Empsalaryregister001mb';
import { EmployeeSalesRegisterService } from '../service/emp-sales-register.service';

@Module({
    imports: [TypeOrmModule.forFeature([Empsalaryregister001mb,Empsalaryregister001hb])],
    providers: [EmployeeSalesRegisterService],
    controllers: [EmployeeSalesRegisterController],
})
export class EmployeeSalesRegisterModule { }
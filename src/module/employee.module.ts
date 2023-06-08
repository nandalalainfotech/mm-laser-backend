import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeController } from '../controller/employee.controller';
import { Employee001hb } from '../entity/Employee001hb';
import { Employee001mb } from '../entity/Employee001mb';
import { EmployeeService } from '../service/employee.service';


@Module({
    imports: [TypeOrmModule.forFeature([Employee001mb,Employee001hb])],
    providers: [EmployeeService],
    controllers: [EmployeeController],
})
export class EmployeeModule { }
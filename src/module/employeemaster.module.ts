import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeemasterController } from 'src/controller/employeemaster.controller';
import { Employeemaster001hb } from 'src/entity/Employeemaster001hb';
import { Employeemaster001mb } from 'src/entity/Employeemaster001mb';
import { EmployeemasterService } from 'src/service/employeemaster.service';


@Module({
    imports: [TypeOrmModule.forFeature([Employeemaster001mb, Employeemaster001hb])],
    providers: [EmployeemasterService],
    controllers: [EmployeemasterController],
})
export class EmployeemasterModule { }
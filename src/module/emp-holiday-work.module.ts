import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeHolidayWorkController } from '../controller/emp-holiday-work.controller';
import { Empworkonholiday001hb } from '../entity/Empworkonholiday001hb';
import { Empworkonholiday001mb } from '../entity/Empworkonholiday001mb';
import { EmployeeHolidayWorkService } from '../service/emp-holiday-work.service';

@Module({
    imports: [TypeOrmModule.forFeature([Empworkonholiday001mb,Empworkonholiday001hb])],
    providers: [EmployeeHolidayWorkService],
    controllers: [EmployeeHolidayWorkController],
})
export class EmployeeHolidayWorkModule { }
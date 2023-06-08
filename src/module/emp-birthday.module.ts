import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {  EmployeeBirthdayController } from '../controller/emp-birthday.controller';
import { Employbirthday001hb } from '../entity/Employbirthday001hb';
import { Employbirthday001mb } from '../entity/Employbirthday001mb';
import { EmployeeBirthdayService} from '../service/emp-birthday.service';

@Module({
    imports: [TypeOrmModule.forFeature([Employbirthday001mb,Employbirthday001hb])],
    providers: [EmployeeBirthdayService],
    controllers: [EmployeeBirthdayController],
})
export class EmployeeBirthdayModule { }
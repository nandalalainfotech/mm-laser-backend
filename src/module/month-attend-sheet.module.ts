import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MonthlyAttendSheetController } from '../controller/month-attend-sheet.controller';
import { Monthlyattendsheet001hb } from '../entity/Monthlyattendsheet001hb';
import { Monthlyattendsheet001mb } from '../entity/Monthlyattendsheet001mb';
import { MonthlyAttendSheetService } from '../service/month-attend-sheet.service';

@Module({
    imports: [TypeOrmModule.forFeature([Monthlyattendsheet001mb,Monthlyattendsheet001hb])],
    providers: [MonthlyAttendSheetService],
    controllers: [MonthlyAttendSheetController],
})
export class MonthlyAttendSheetModule { }
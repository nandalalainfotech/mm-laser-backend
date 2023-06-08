import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HolidayListController } from '../controller/holiday-list.controller';
import { Holidaylist001hb } from '../entity/Holidaylist001hb';
import { Holidaylist001mb } from '../entity/Holidaylist001mb';
import { HolidayListService } from '../service/holiday-list.service';

@Module({
  imports: [TypeOrmModule.forFeature([Holidaylist001mb,Holidaylist001hb])],
  providers: [HolidayListService],
  controllers: [HolidayListController],
})
export class HolidayListModule {}

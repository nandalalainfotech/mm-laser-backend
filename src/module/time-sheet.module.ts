import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimeSheetController } from '../controller/time-sheet.controller';
import { Dailytimesheet001hb } from '../entity/Dailytimesheet001hb';
import { Dailytimesheet001mb } from '../entity/Dailytimesheet001mb';
import { TimeSheetService } from '../service/time-sheet.service';

@Module({
  imports: [TypeOrmModule.forFeature([Dailytimesheet001mb,Dailytimesheet001hb])],
  providers: [TimeSheetService],
  controllers: [TimeSheetController],
})
export class TimeSheetModule {}

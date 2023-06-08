import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdTimeSheetController } from '../controller/prod-time-sheet.controller';
import { Prodtimesheet001hb } from '../entity/Prodtimesheet001hb';
import { Prodtimesheet001mb } from '../entity/Prodtimesheet001mb';
import { ProdTimeSheetService } from '../service/prod-timest.service';

@Module({
  imports: [TypeOrmModule.forFeature([Prodtimesheet001mb,Prodtimesheet001hb])],
  providers: [ProdTimeSheetService],
  controllers: [ProdTimeSheetController],
})
export class ProdTimeSheetModule {}

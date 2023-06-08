import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemPriceReportController } from '../controller/item-price-report.controller';
import { Itempricereport001hb } from '../entity/Itempricereport001hb';
import { Itempricereport001mb } from '../entity/Itempricereport001mb';
import { ItemPriceReportService } from '../service/item-price-report.service';


@Module({
  imports: [TypeOrmModule.forFeature([Itempricereport001mb,Itempricereport001hb])],
  providers: [ItemPriceReportService],
  controllers: [ItemPriceReportController],
})
export class ItemPriceReportModule {}

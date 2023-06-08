import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrossProfitController } from '../controller/gross-profit.controller';
import { Grossprofit001hb } from '../entity/Grossprofit001hb';
import { Grossprofit001mb } from '../entity/Grossprofit001mb';
import { GrossProfitService } from '../service/gross-profit.service';

@Module({
  imports: [TypeOrmModule.forFeature([Grossprofit001mb,Grossprofit001hb])],
  providers: [GrossProfitService],
  controllers: [GrossProfitController],
})
export class  GrossProfitModule {}

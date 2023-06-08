import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdPlanController } from '../controller/prod-plan.controller';
import { Prodplan001hb } from '../entity/Prodplan001hb';
import { Prodplan001mb } from '../entity/Prodplan001mb';
import { ProdPlanService } from '../service/prod-plan.service';

@Module({
  imports: [TypeOrmModule.forFeature([Prodplan001mb,Prodplan001hb])],
  providers: [ProdPlanService],
  controllers: [ProdPlanController],
})
export class ProdPlanModule {}

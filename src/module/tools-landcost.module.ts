import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToolsLandCostController } from '../controller/tools-landcost.controller';
import { Landcostvouch001hb } from '../entity/Landcostvouch001hb';
import { Landcostvouch001mb } from '../entity/Landcostvouch001mb';
import { ToolsLandCostService } from '../service/tool-landcost.service';

@Module({
    imports: [TypeOrmModule.forFeature([Landcostvouch001mb,Landcostvouch001hb])],
    providers: [ToolsLandCostService],
    controllers: [ToolsLandCostController],
})
export class ToolsLandCostVoutureModule { }

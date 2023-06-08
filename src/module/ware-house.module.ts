import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WareHouseController } from '../controller/ware-house.controller';
import { Warehouse001hb } from '../entity/Warehouse001hb';
import { Warehouse001mb } from '../entity/Warehouse001mb';
import { WareHouseService } from '../service/ware-house.service';

@Module({
    imports: [TypeOrmModule.forFeature([Warehouse001mb,Warehouse001hb])],
    providers: [WareHouseService],
    controllers: [WareHouseController],
})
export class WareHouseModule { }
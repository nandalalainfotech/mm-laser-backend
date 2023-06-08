import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalseOrderController } from '../controller/salse-order.controller';
import { Salesorder001hb } from '../entity/Salesorder001hb';
import { Salesorder001mb } from '../entity/Salesorder001mb';
import { SalseOrderService } from '../service/salse-order.service';

@Module({
    imports: [TypeOrmModule.forFeature([Salesorder001mb,Salesorder001hb])],
    providers: [SalseOrderService],
    controllers: [SalseOrderController],
})
export class SalseOrderModule { }
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompleteOrderController } from '../controller/complete-order.controller';
import { Compprodorder001hb } from '../entity/Compprodorder001hb';
import { Compprodorder001mb } from '../entity/Compprodorder001mb';
import { CompleteOrderService } from '../service/complete-order.service';


@Module({
    imports: [TypeOrmModule.forFeature([Compprodorder001mb,Compprodorder001hb])],
    providers: [CompleteOrderService],
    controllers: [CompleteOrderController],
})
export class CompleteOrderModule { }
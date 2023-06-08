import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OpenProdOrderController } from '../controller/open-prod-order.controller';
import { Openprodorder001hb } from '../entity/Openprodorder001hb';
import { Openprodorder001mb } from '../entity/Openprodorder001mb';
import { OpenProdOrderService } from '../service/open-prod-order.service';



@Module({
    imports: [TypeOrmModule.forFeature([Openprodorder001mb,Openprodorder001hb])],
    providers: [OpenProdOrderService],
    controllers: [OpenProdOrderController],
})
export class OpenProdOrderModule { }
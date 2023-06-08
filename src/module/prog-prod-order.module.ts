import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProgProdOrderController } from '../controller/prog-prod-order.controller';
import { Progprodorder001hb } from '../entity/Progprodorder001hb';
import { Progprodorder001mb } from '../entity/Progprodorder001mb';
import { ProgProdOrderService } from '../service/prog-prod-order.service';


@Module({
  imports: [TypeOrmModule.forFeature([Progprodorder001mb,Progprodorder001hb])],
  providers: [ProgProdOrderService],
  controllers: [ProgProdOrderController],
})
export class ProgProdOrderModule { }

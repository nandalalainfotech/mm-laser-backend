import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseOrderController } from '../controller/purchase-order.controller';
import { Prpurchaseord001hb } from '../entity/Prpurchaseord001hb';
import { Prpurchaseord001mb } from '../entity/Prpurchaseord001mb';
import { PurchaseOrderService } from '../service/purchase-order.service';

@Module({
  imports: [TypeOrmModule.forFeature([Prpurchaseord001mb,Prpurchaseord001hb])],
  providers: [PurchaseOrderService],
  controllers: [PurchaseOrderController],
})
export class PurchaseOrderModule {}

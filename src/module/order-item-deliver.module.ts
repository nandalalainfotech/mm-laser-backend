import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItemDeliverController } from '../controller/order-item-deliver.controller';
import { Orditemsdeliver001hb } from '../entity/Orditemsdeliver001hb';
import { Orditemsdeliver001mb } from '../entity/Orditemsdeliver001mb';
import { OrderItemDeliverService } from '../service/order-item-deliver.service';


@Module({
  imports: [TypeOrmModule.forFeature([Orditemsdeliver001mb,Orditemsdeliver001hb])],
  providers: [OrderItemDeliverService],
  controllers: [OrderItemDeliverController],
})
export class OrderItemDeliverModule {}

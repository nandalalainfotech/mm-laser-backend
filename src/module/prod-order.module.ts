import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdOrderController } from '../controller/prod-order.controller';
import { Prodorder001hb } from '../entity/Prodorder001hb';
import { Prodorder001mb } from '../entity/Prodorder001mb';
import { ProdOrderService } from '../service/prod-order.service';

@Module({
  imports: [TypeOrmModule.forFeature([Prodorder001mb,Prodorder001hb])],
  providers: [ProdOrderService],
  controllers: [ProdOrderController],
})
export class ProdOrderModule {}

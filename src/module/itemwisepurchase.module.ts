import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemWisePurchaseController } from '../controller/itemwisepurchase.controller';
import { Itemwisepurregister001hb } from '../entity/Itemwisepurregister001hb';
import { Itemwisepurregister001mb } from '../entity/Itemwisepurregister001mb';
import { ItemWisePurchaseService } from '../service/itemwisepurchase.service';

@Module({
  imports: [TypeOrmModule.forFeature([Itemwisepurregister001mb,Itemwisepurregister001hb])],
  providers: [ItemWisePurchaseService],
  controllers: [ItemWisePurchaseController],
})
export class ItemWisePurchaseModule {}

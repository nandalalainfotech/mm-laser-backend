import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseItemDeliverController } from '../controller/purchase-item-deliver.controller';
import { Purorditemreceive001hb } from '../entity/Purorditemreceive001hb';
import { Purorditemreceive001mb } from '../entity/Purorditemreceive001mb';
import { PurchaseItemDeliverService } from '../service/purchase-item-deliver.service';

@Module({
  imports: [TypeOrmModule.forFeature([Purorditemreceive001mb,Purorditemreceive001hb])],
  providers: [PurchaseItemDeliverService],
  controllers: [PurchaseItemDeliverController],
})
export class PurchaseItemDeliverModule {}

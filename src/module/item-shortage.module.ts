import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemShortageController } from '../controller/item-shortage.controller';
import { Itemshortagerep001hb } from '../entity/Itemshortagerep001hb';
import { Itemshortagerep001mb } from '../entity/Itemshortagerep001mb';
import { ItemShortageService } from '../service/item-shortage.service';


@Module({
  imports: [TypeOrmModule.forFeature([Itemshortagerep001mb,Itemshortagerep001hb])],
  providers: [ItemShortageService],
  controllers: [ItemShortageController],
})
export class ItemShortageModule {}

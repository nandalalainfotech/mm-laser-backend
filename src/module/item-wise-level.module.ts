import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemWiseLevelController } from '../controller/item-wise-level.controller';
import { Itemwiselevel001hb } from '../entity/Itemwiselevel001hb';
import { Itemwiselevel001mb } from '../entity/Itemwiselevel001mb';
import { ItemWiseLevelService } from '../service/item-wise-level.service';


@Module({
  imports: [TypeOrmModule.forFeature([Itemwiselevel001mb,Itemwiselevel001hb])],
  providers: [ItemWiseLevelService],
  controllers: [ItemWiseLevelController],
})
export class ItemWiseLevelModule {}

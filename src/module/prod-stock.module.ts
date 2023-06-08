import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdStockController } from '../controller/prod-stack.controller';
import { Prodstockentry001hb } from '../entity/Prodstockentry001hb';
import { Prodstockentry001mb } from '../entity/Prodstockentry001mb';
import { ProdStockService } from '../service/prod-stack.service';

@Module({
  imports: [TypeOrmModule.forFeature([Prodstockentry001mb,Prodstockentry001hb])],
  providers: [ProdStockService],
  controllers: [ProdStockController],
})
export class ProdStockModule {}

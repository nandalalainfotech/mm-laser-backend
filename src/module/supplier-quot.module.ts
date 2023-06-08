import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierQuotController } from '../controller/supplier-quot.contoller';
import { Prsureq001hb } from '../entity/Prsureq001hb';
import { Prsureq001mb } from '../entity/Prsureq001mb';
import { SupplierQuotService } from '../service/supplier-quot.service';

@Module({
  imports: [TypeOrmModule.forFeature([Prsureq001mb,Prsureq001hb])],
  providers: [SupplierQuotService],
  controllers: [SupplierQuotController],
})
export class SupplierQuotModule {}

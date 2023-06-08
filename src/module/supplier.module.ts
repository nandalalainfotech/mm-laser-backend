import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierController } from '../controller/supplier.controller';
import { Supplier001hb } from '../entity/Supplier001hb';
import { Supplier001mb } from '../entity/Supplier001mb';
import { SupplierService } from '../service/supplier.service';

@Module({
  imports: [TypeOrmModule.forFeature([Supplier001mb,Supplier001hb])],
  providers: [SupplierService],
  controllers: [SupplierController],
})
export class SupplierModule {}
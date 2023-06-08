import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseInvoiceController } from '../controller/purchase-invoice.controller';
import { Grossprofit001hb } from '../entity/Grossprofit001hb';
import { Grossprofit001mb } from '../entity/Grossprofit001mb';
import { PurchaseInvoiceService } from '../service/purchase-invoice.service';

@Module({
    imports: [TypeOrmModule.forFeature([Grossprofit001mb,Grossprofit001hb])],
    providers: [PurchaseInvoiceService],
    controllers: [PurchaseInvoiceController],
})
export class PurchaseInvoiceModule { }
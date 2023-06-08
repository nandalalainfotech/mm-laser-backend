import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesInvoiceController } from '../controller/sales-invoice.controller';
import { Grossprofit001hb } from '../entity/Grossprofit001hb';
import { Grossprofit001mb } from '../entity/Grossprofit001mb';
import { SalesInvoiceService } from '../service/sales-invoice.service';

@Module({
    imports: [TypeOrmModule.forFeature([Grossprofit001mb,Grossprofit001hb])],
    providers: [SalesInvoiceService],
    controllers: [SalesInvoiceController],
})
export class SalesInvoiceModule { }
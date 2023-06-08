import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeriodclosingVoucherController } from '../controller/periodclosing-voucher.controller';
import { Periodclosingvoucher001hb } from '../entity/Periodclosingvoucher001hb';
import { Periodclosingvoucher001mb } from '../entity/Periodclosingvoucher001mb';
import { PeriodclosingVoucherService } from '../service/periodclosing-voucher.service';


@Module({
    imports: [TypeOrmModule.forFeature([Periodclosingvoucher001mb,Periodclosingvoucher001hb])],
    providers: [PeriodclosingVoucherService],
    controllers: [PeriodclosingVoucherController],
})
export class PeriodclosingVoucherModule { }


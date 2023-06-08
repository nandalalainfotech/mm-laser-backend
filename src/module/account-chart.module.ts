import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountChartController } from '../controller/account-chart.controller';
import { Accountchart001hb } from '../entity/Accountchart001hb';
import { Accountchart001mb } from '../entity/Accountchart001mb';
import { AccountChartService } from '../service/account-chart.service';

@Module({
    imports: [TypeOrmModule.forFeature([Accountchart001mb,Accountchart001hb])],
    providers: [AccountChartService],
    controllers: [AccountChartController],
})
export class AccountChartModule { }

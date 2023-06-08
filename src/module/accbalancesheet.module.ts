
import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AccBalanceSheetservice } from "../service/accbalancesheet.service";
import { AccBalanceSheetcontroller } from "../controller/accbalancesheet.controller";
import { Accbalancesheet001hb } from '../entity/Accbalancesheet001hb';
import { Accbalancesheet001mb } from '../entity/Accbalancesheet001mb';

@Module({
    imports: [TypeOrmModule.forFeature([Accbalancesheet001mb,Accbalancesheet001hb])],
    providers: [AccBalanceSheetservice],
    controllers: [AccBalanceSheetcontroller],
})
export class AccbalancesheetModule { }
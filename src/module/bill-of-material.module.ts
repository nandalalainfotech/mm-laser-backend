import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Billcontroller } from "../controller/bill-of-material.controller";
import { Itemdt001hb } from "../entity/Itemdt001hb";
import { Itemdt001mb } from "../entity/Itemdt001mb";
import { Billservice } from "../service/bill-of-material.service";

@Module({
    imports: [TypeOrmModule.forFeature([Itemdt001mb,Itemdt001hb])],
    providers: [Billservice],
    controllers: [Billcontroller],
})

export class BillOfMaterialModule { }
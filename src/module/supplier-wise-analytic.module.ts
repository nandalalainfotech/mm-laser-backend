import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SupplierWiseAnalyticController } from "../controller/supplier-wise-analytic.controller";
import { Swsanalytics001hb } from "../entity/Swsanalytics001hb";
import { Swsanalytics001mb } from "../entity/Swsanalytics001mb";
import { SupplierWiseAnalyticService } from "../service/supplier-wise-analytic.service";

@Module({
    imports: [TypeOrmModule.forFeature([Swsanalytics001mb,Swsanalytics001hb])],
    providers: [SupplierWiseAnalyticService],
    controllers: [SupplierWiseAnalyticController]
})

export class SupplierWiseAnalyticModule {}
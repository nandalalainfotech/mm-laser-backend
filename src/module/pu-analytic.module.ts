import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PuAnalyticController } from "../controller/pu-analytic.controller";
import { Puranalytics001hb } from "../entity/Puranalytics001hb";
import { Puranalytics001mb } from "../entity/Puranalytics001mb";
import { PuAnalyticService } from "../service/pu-analytic.service";

@Module({
    imports: [TypeOrmModule.forFeature([Puranalytics001mb,Puranalytics001hb])],
    providers: [PuAnalyticService],
    controllers: [PuAnalyticController]
})

export class PuAnalyticModule {}
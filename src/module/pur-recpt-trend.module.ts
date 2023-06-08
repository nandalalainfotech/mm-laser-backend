import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PurRecptTrendController } from "../controller/pur-recpt-trend.controller";
import { Purecpttrend001hb } from "../entity/Purecpttrend001hb";
import { Purecpttrend001mb } from "../entity/Purecpttrend001mb";
import { PurRecptTrendService } from "../service/pur-recpt-trend.service";

@Module({
    imports: [TypeOrmModule.forFeature([Purecpttrend001mb,Purecpttrend001hb])],
    providers: [PurRecptTrendService],
    controllers: [PurRecptTrendController]
})

export class PurRecptTrendModule {}
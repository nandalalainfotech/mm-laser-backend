import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderTrendController } from "../controller/order-trend.controller";
import { Delnotetrends001hb } from "../entity/Delnotetrends001hb";
import { Delnotetrends001mb } from "../entity/Delnotetrends001mb";
import { OrderTrendService } from "../service/order-trend.service";


@Module({
    imports: [TypeOrmModule.forFeature([Delnotetrends001mb,Delnotetrends001hb])],
    providers: [OrderTrendService],
    controllers: [OrderTrendController]
})

export class OrderTrendModule {}
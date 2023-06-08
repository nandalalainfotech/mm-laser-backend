import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StockAgeingController } from "../controller/stock-ageing.controller";
import { Stkrepageing001hb } from "../entity/Stkrepageing001hb";
import { Stkrepageing001mb } from "../entity/Stkrepageing001mb";
import { StockAgeingService } from "../service/stock-ageing.service";

@Module({
    imports: [TypeOrmModule.forFeature([Stkrepageing001mb,Stkrepageing001hb])],
    providers: [StockAgeingService],
    controllers: [StockAgeingController],
})
export class StockAgeingModule { }

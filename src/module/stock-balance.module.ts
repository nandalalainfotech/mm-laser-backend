import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StockBalanceController } from "../controller/stock-balance.controller";
import { Stkrepbalance001hb } from "../entity/Stkrepbalance001hb";
import { Stkrepbalance001mb } from "../entity/Stkrepbalance001mb";
import { StockBalanceService } from "../service/stock-balance.service";

@Module({
    imports: [TypeOrmModule.forFeature([Stkrepbalance001mb,Stkrepbalance001hb])],
    providers: [StockBalanceService],
    controllers: [StockBalanceController],
})
export class StockBalanceModule { }

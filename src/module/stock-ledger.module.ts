import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StockLedgerController } from "../controller/stock-ledger.controller";
import { Stkrepledger001hb } from "../entity/Stkrepledger001hb";
import { Stkrepledger001mb } from "../entity/Stkrepledger001mb";
import { StockLedgerService } from "../service/stock-ledger.service";

@Module({
    imports: [TypeOrmModule.forFeature([Stkrepledger001mb,Stkrepledger001hb])],
    providers: [StockLedgerService],
    controllers: [StockLedgerController],
})
export class StockLedgerModule { }

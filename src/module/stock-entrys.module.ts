import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StockEntryController } from "../controller/stock-entrys.controller";
import { Stockentry001hb } from "../entity/Stockentry001hb";
import { Stockentry001mb } from "../entity/Stockentry001mb";
import { StockEntryService } from "../service/stock-entrys.service";

@Module({
    imports: [TypeOrmModule.forFeature([Stockentry001mb,Stockentry001hb])],
    providers: [StockEntryService],
    controllers: [StockEntryController],
})
export class StockEntrysModule { }
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StockEntryController } from "../controller/stock-entry.controller";
import { Stktransentry001hb } from "../entity/Stktransentry001hb";
import { Stktransentry001mb } from "../entity/Stktransentry001mb";
import { StockEntryService } from "../service/stock-entry.service";

@Module({
    imports: [TypeOrmModule.forFeature([Stktransentry001mb,Stktransentry001hb])],
    providers: [StockEntryService],
    controllers: [StockEntryController]
})

export class StockEntryModule {}
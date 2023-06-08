import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SalesItemController } from "../controller/sales-item.controller";
import { Itemdt001hb } from "../entity/Itemdt001hb";
import { Itemdt001mb } from "../entity/Itemdt001mb";
import { SalesItemService } from "../service/sales-item.service";

@Module({
    imports: [TypeOrmModule.forFeature([Itemdt001mb,Itemdt001hb])],
    providers: [SalesItemService],
    controllers: [SalesItemController],
})
export class SalesItemModule { }
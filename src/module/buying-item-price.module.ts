import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BuyingItemPriceController } from "../controller/buying-item-price.controller";
import { Itemprice001hb } from "../entity/Itemprice001hb";
import { Itemprice001mb } from "../entity/Itemprice001mb";
import { BuyingItemPriceService } from "../service/buying-item-price.service";

@Module({
    imports: [TypeOrmModule.forFeature([Itemprice001mb,Itemprice001hb])],
    providers: [BuyingItemPriceService],
    controllers: [BuyingItemPriceController],
})
export class BuyingItemPriceModule { }
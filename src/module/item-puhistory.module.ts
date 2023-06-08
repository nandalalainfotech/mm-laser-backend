import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ItemPuhistoryController } from "../controller/item-puhistory.controller";
import { Itempuhist001hb } from "../entity/Itempuhist001hb";
import { Itempuhist001mb } from "../entity/Itempuhist001mb";
import { ItemPuhistoryService } from "../service/item-puhistory.service";



@Module({
    imports: [TypeOrmModule.forFeature([Itempuhist001mb,Itempuhist001hb])],
    providers: [ItemPuhistoryService],
    controllers: [ItemPuhistoryController],
})
export class ItemPuhistoryModule { }

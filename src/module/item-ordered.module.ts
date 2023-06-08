import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ItemOrderedController } from "../controller/item-ordered.controller";
import { Reqitemorder001hb } from "../entity/Reqitemorder001hb";
import { Reqitemorder001mb } from "../entity/Reqitemorder001mb";
import { ItemOrderedService } from "../service/item-ordered.service";

@Module({
    imports: [TypeOrmModule.forFeature([Reqitemorder001mb,Reqitemorder001hb])],
    providers: [ItemOrderedService],
    controllers: [ItemOrderedController],
})
export class ItemOrderedModule { }

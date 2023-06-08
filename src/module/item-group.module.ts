import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ItemGroupController } from "../controller/item-group.controller";
import { Itemgroup001hb } from "../entity/Itemgroup001hb";
import { Itemgroup001mb } from "../entity/Itemgroup001mb";
import { ItemGroupService } from "../service/item-group.service";

@Module({
    imports: [TypeOrmModule.forFeature([Itemgroup001mb,Itemgroup001hb])],
    providers: [ItemGroupService],
    controllers: [ItemGroupController],
})
export class ItemGroupModule { }

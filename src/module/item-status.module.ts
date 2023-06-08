import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ItemStatusController } from "../controller/item-status.controller";
import { Itemst001hb } from "../entity/Itemst001hb";
import { Itemst001mb } from "../entity/Itemst001mb";
import { ItemStatusService } from "../service/item-status.service";

@Module({
    imports: [TypeOrmModule.forFeature([Itemst001mb,Itemst001hb])],
    providers: [ItemStatusService],
    controllers: [ItemStatusController],
})
export class ItemStatusModule {}
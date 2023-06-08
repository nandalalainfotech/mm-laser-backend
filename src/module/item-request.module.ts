import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ItemRequestController } from "../controller/item-request.controller";
import { Requestitembuy001hb } from "../entity/Requestitembuy001hb";
import { Requestitembuy001mb } from "../entity/Requestitembuy001mb";
import { ItemRequestService } from "../service/item-request.service";


@Module({
    imports: [TypeOrmModule.forFeature([Requestitembuy001mb,Requestitembuy001hb])],
    providers: [ItemRequestService],
    controllers: [ItemRequestController],
})
export class ItemRequestModule { }

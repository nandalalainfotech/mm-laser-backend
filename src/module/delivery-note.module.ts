import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DeliveryNoteController } from "../controller/delivery-note.controller";
import { Stktransdeliver001hb } from "../entity/Stktransdeliver001hb";
import { Stktransdeliver001mb } from "../entity/Stktransdeliver001mb";
import { DeliveryNoteService } from "../service/delivery-note.service";

@Module({
    imports: [TypeOrmModule.forFeature([Stktransdeliver001mb,Stktransdeliver001hb])],
    providers: [DeliveryNoteService],
    controllers: [DeliveryNoteController]
})

export class DeliveryNoteModule {}
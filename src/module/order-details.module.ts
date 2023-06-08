import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderDetailsController } from "../controller/order-details.controller";
import { Order001hb } from "../entity/Order001hb";
import { Order001mb } from "../entity/Order001mb";
import { OrderDetailsService } from "../service/order-details.service";

@Module({
    imports: [TypeOrmModule.forFeature([Order001mb,Order001hb])],
    providers: [OrderDetailsService],
    controllers: [OrderDetailsController]
})

export class OrderDetailsModule {}
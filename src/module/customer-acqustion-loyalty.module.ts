import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerLoyaltyController } from "../controller/customer-acqustion-loyalty.controller";
import { Customeracquisition001hb } from "../entity/Customeracquisition001hb";
import { Customeracquisition001mb } from "../entity/Customeracquisition001mb";
import { CustomerLoyaltyService } from "../service/customer-acqustion-loyalty.service";

@Module({
    imports: [TypeOrmModule.forFeature([Customeracquisition001mb,Customeracquisition001hb])],
    providers: [CustomerLoyaltyService],
    controllers: [CustomerLoyaltyController],
})
export class CustomerLoyaltyModule { }
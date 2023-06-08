import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerDetailController } from "../controller/customer-detail.controller";
import { Customerdetails001hb } from "../entity/Customerdetails001hb";
import { Customerdetails001mb } from "../entity/Customerdetails001mb";
import { CustomerDetailService } from "../service/customer-detail.service";

@Module({
    imports: [TypeOrmModule.forFeature([Customerdetails001mb,Customerdetails001hb])],
    providers: [CustomerDetailService],
    controllers: [CustomerDetailController]
})

export class CustomerDetailModule {}
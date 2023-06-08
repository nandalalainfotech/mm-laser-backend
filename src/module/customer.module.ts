import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerController } from "../controller/customer.controller";
import { Customerdetails001hb } from "../entity/Customerdetails001hb";
import { Customerdetails001mb } from "../entity/Customerdetails001mb";
import { CustomerService } from "../service/customer.service";

@Module({
    imports: [TypeOrmModule.forFeature([Customerdetails001mb,Customerdetails001hb])],
    providers: [CustomerService],
    controllers: [CustomerController],
})
export class CustomerModule { }
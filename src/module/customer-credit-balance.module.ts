import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Balancecontroller } from "../controller/customer-credit-balance.controller";
import { Customercreditbalance001hb } from "../entity/Customercreditbalance001hb";
import { Customercreditbalance001mb } from "../entity/Customercreditbalance001mb";
import { Balanceservice } from "../service/customer-credit-balance.service";

@Module({
    imports: [TypeOrmModule.forFeature([Customercreditbalance001mb,Customercreditbalance001hb])],
    providers: [Balanceservice],
    controllers: [Balancecontroller],
})

export class CustomerCreditBalanceModule { }
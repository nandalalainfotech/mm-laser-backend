import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CrmSalesCustomerController } from "../controller/crm-sales-customer.controller";
import { Crmspcust001hb } from "../entity/Crmspcust001hb";
import { Crmspcust001mb } from "../entity/Crmspcust001mb";
import { CrmSalesCustomerService } from "../service/crm-sales-customer.service";

@Module({
    imports: [TypeOrmModule.forFeature([Crmspcust001mb,Crmspcust001hb])],
    providers: [CrmSalesCustomerService],
    controllers: [CrmSalesCustomerController]
})

export class CrmSalesCustomerModule {}
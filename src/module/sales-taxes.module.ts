import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SalesTaxController } from "../controller/sales-taxes.controller";
import { Salestaxesandtemplates001hb } from "../entity/Salestaxesandtemplates001hb";
import { Salestaxesandtemplates001mb } from "../entity/Salestaxesandtemplates001mb";
import { SalesTaxService } from "../service/sales-taxes.service";

@Module({
    imports: [TypeOrmModule.forFeature([Salestaxesandtemplates001mb,Salestaxesandtemplates001hb])],
    providers: [SalesTaxService],
    controllers: [SalesTaxController],
})
export class SalesTaxModule { }
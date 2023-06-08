import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SalesRegisterController } from "../controller/sale-register.cotroller";
import { Salesregister001hb } from "../entity/Salesregister001hb";
import { Salesregister001mb } from "../entity/Salesregister001mb";
import { SalesRegisterService } from "../service/sale-register.service";

@Module({
    imports: [TypeOrmModule.forFeature([Salesregister001mb,Salesregister001hb])],
    providers: [SalesRegisterService],
    controllers: [SalesRegisterController],
})
export class SalesRegisterModule { }

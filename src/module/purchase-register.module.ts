import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PurchaseRegisterController } from "../controller/purchase-register.controller";
import { Purchaseregister001hb } from "../entity/Purchaseregister001hb";
import { Purchaseregister001mb } from "../entity/Purchaseregister001mb";
import { PurchaseRegisterService } from "../service/purchase-register.service";

@Module({
    imports: [TypeOrmModule.forFeature([Purchaseregister001mb,Purchaseregister001hb])],
    providers: [PurchaseRegisterService],
    controllers: [PurchaseRegisterController],
})
export class PurchaseRegisterModule { }

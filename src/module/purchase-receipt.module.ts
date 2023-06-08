import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PurchaseReceiptController } from "../controller/purchase-receipt.controller";
import { Stktranspurecpt001hb } from "../entity/Stktranspurecpt001hb";
import { Stktranspurecpt001mb } from "../entity/Stktranspurecpt001mb";
import { PurchaseReceiptService } from "../service/purchase-receipt.service";

@Module({
    imports: [TypeOrmModule.forFeature([Stktranspurecpt001mb,Stktranspurecpt001hb])],
    providers: [PurchaseReceiptService],
    controllers: [PurchaseReceiptController]
})

export class PurchaseReceiptModule {}
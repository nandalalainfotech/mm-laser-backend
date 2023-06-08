import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CostCenterController } from "../controller/costcenter.controller";
import { Costcenter001hb } from "../entity/Costcenter001hb";
import { Costcenter001mb } from "../entity/Costcenter001mb";
import { CostCenterService } from "../service/costcenter.service";

@Module({
    imports: [TypeOrmModule.forFeature([Costcenter001mb,Costcenter001hb])],
    providers: [CostCenterService],
    controllers: [CostCenterController]
})

export class CostCenterModule {}
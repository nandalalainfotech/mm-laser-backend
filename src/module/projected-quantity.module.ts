import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProjectQuantityController } from "../controller/projected-quantity.controller";
import { Stkrepproject001hb } from "../entity/Stkrepproject001hb";
import { Stkrepproject001mb } from "../entity/Stkrepproject001mb";
import { ProjectQuantityService } from "../service/projected-quantity.service";

@Module({
    imports: [TypeOrmModule.forFeature([Stkrepproject001mb,Stkrepproject001hb])],
    providers: [ProjectQuantityService],
    controllers: [ProjectQuantityController],
  })
  export class ProjectQuantityModule {}
  
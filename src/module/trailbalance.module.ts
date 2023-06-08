import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TrailBalancecontroller } from "../controller/trailbalance.controller";
import { Trialbalance001hb } from "../entity/Trialbalance001hb";
import { Trialbalance001mb } from "../entity/Trialbalance001mb";
import { TrailBalanceservice } from "../service/trailbalance.service";

@Module({
    imports: [TypeOrmModule.forFeature([Trialbalance001mb,Trialbalance001hb])],
    providers: [TrailBalanceservice],
    controllers: [TrailBalancecontroller],
  })
  export class TrailbalanceModule {}    
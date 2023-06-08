import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AccProfitLossController } from "../controller/accprofitloss.controller";
import { Accprofitlossstatement001hb } from "../entity/Accprofitlossstatement001hb";
import { Accprofitlossstatement001mb } from "../entity/Accprofitlossstatement001mb";
import { AccProfitLossService } from "../service/accprofitloss.service";

@Module({
    imports: [TypeOrmModule.forFeature([Accprofitlossstatement001mb,Accprofitlossstatement001hb])],
    providers: [AccProfitLossService],
    controllers: [AccProfitLossController],
  })
  export class AccprofitlossModule {}
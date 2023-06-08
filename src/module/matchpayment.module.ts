import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MatchPaymentController } from "../controller/matchpayment.controller";
import { Matchpayment001hb } from "../entity/Matchpayment001hb";
import { Matchpayment001mb } from "../entity/Matchpayment001mb";
import { MatchPaymentService } from "../service/matchpayment.service";

@Module({
    imports: [TypeOrmModule.forFeature([Matchpayment001mb,Matchpayment001hb])],
    providers: [MatchPaymentService],
    controllers: [MatchPaymentController],
})
export class MatchPaymentModule { }
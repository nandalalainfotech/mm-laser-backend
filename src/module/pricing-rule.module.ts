import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PricingRuleController } from "../controller/pricing-rule.controller";
import { Pricingrule001hb } from "../entity/Pricingrule001hb";
import { Pricingrule001mb } from "../entity/Pricingrule001mb";
import { PricingRuleService } from "../service/pricing-rule.service";

@Module({
    imports: [TypeOrmModule.forFeature([Pricingrule001mb,Pricingrule001hb])],
    providers: [
        PricingRuleService
    ],
    controllers: [PricingRuleController],
})
export class PricingRuleModule { }

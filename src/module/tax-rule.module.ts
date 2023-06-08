import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TaxRuleController } from "../controller/tax-rule.controller";
import { Taxrule001hb } from "../entity/Taxrule001hb";
import { Taxrule001mb } from "../entity/Taxrule001mb";
import { TaxRuleService } from "../service/tax-rule.service";

@Module({
    imports: [TypeOrmModule.forFeature([Taxrule001mb,Taxrule001hb])],
    providers: [TaxRuleService],
    controllers: [TaxRuleController],
  })
  export class TaxRuleModule {}
  
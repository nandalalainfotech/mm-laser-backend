import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ShippingRuleController } from "../controller/shipping-rule.controller";
import { Shippingrule001hb } from "../entity/Shippingrule001hb";
import { Shippingrule001mb } from "../entity/Shippingrule001mb";
import { ShippingRuleService } from "../service/shipping-rule.service";

@Module({
    imports: [TypeOrmModule.forFeature([Shippingrule001mb,Shippingrule001hb])],
    providers: [ShippingRuleService],
    controllers: [ShippingRuleController],
  })
  export class ShippingRuleModule {}
  
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CrmOpportunityController } from "../controller/crm-opportunity.controller";
import { Crmspoppo001hb } from "../entity/Crmspoppo001hb";
import { Crmspoppo001mb } from "../entity/Crmspoppo001mb";
import { CrmOpportunityService } from "../service/crm-opportunity.service";


@Module({
    imports: [TypeOrmModule.forFeature([Crmspoppo001mb,Crmspoppo001hb])],
    providers: [CrmOpportunityService],
    controllers: [CrmOpportunityController]
})

export class CrmOpportunityModule {}
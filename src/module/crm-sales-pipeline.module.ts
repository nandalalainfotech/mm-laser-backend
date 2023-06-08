import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CrmSalesPipelineController } from "../controller/crm-sales-pipeline.controller";
import { Crmsplead001hb } from "../entity/Crmsplead001hb";
import { Crmsplead001mb } from "../entity/Crmsplead001mb";
import { CrmSalesPipelineService } from "../service/crm-sales-pipeline.service";

@Module({
    imports: [TypeOrmModule.forFeature([Crmsplead001mb,Crmsplead001hb])],
    providers: [CrmSalesPipelineService],
    controllers: [CrmSalesPipelineController]
})

export class CrmSalesPipelineModule {}
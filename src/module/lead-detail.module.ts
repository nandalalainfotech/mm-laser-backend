import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LeadDetailController } from "../controller/lead-detail.controller";
import { Lead001hb } from "../entity/Lead001hb";
import { Lead001mb } from "../entity/Lead001mb";
import { LeadDetailService } from "../service/lead-detail.service";

@Module({
    imports: [TypeOrmModule.forFeature([Lead001mb,Lead001hb])],
    providers: [LeadDetailService],
    controllers: [LeadDetailController]
})

export class LeadDetailModule {}
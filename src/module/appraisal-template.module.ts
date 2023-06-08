import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppraisalTemplateController } from "../controller/appraisal-template.controller";
import { Apprtemp001hb } from "../entity/Apprtemp001hb";
import { Apprtemp001mb } from "../entity/Apprtemp001mb";
import { AppraisalTemplateService } from "../service/appraisal-template.service";

@Module({
    imports: [TypeOrmModule.forFeature([Apprtemp001mb,Apprtemp001hb])],
    providers: [AppraisalTemplateService],
    controllers: [AppraisalTemplateController]
})

export class AppraisalTemplateModule {}
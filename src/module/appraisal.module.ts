import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppraisalController } from "../controller/appraisal.controller";
import { Appraisal001hb } from "../entity/Appraisal001hb";
import { Appraisal001mb } from "../entity/Appraisal001mb";
import { AppraisalService } from "../service/appraisal.service";

@Module ({
    imports: [TypeOrmModule.forFeature([Appraisal001mb,Appraisal001hb])],
    providers: [AppraisalService],
    controllers: [AppraisalController]
})

export class AppraisalModule {}
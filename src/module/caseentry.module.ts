import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CaseentryController } from "src/controller/caseentry.controller";
import { Caseentry001hb } from "src/entity/Caseentry001hb";
import { Caseentry001mb } from "src/entity/Caseentry001mb";
import { Casemachine001wb } from "src/entity/Casemachine001wb";
import { Doctormaster001hb } from "src/entity/Doctormaster001hb";
import { Doctormaster001mb } from "src/entity/Doctormaster001mb";
import { Machinemaster001hb } from "src/entity/Machinemaster001hb";
import { Machinemaster001mb } from "src/entity/Machinemaster001mb";
import { CaseentryService } from "src/service/caseentry.service";

@Module({
    imports: [TypeOrmModule.forFeature([Caseentry001mb, Caseentry001hb, Machinemaster001mb, Machinemaster001hb, Doctormaster001hb, Doctormaster001mb, Casemachine001wb])],
    providers: [CaseentryService],
    controllers: [CaseentryController],
})
export class CaseentryModule { }
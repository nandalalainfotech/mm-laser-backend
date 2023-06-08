import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ApplicationsettingController } from "../controller/applicationsetting.controller";
import { Applicationsetting001hb } from "../entity/Applicationsetting001hb";
import { Applicationsetting001mb } from "../entity/Applicationsetting001mb";
import { ApplicationsettingService } from "../service/applicationsetting.service";


@Module({
    imports: [TypeOrmModule.forFeature([Applicationsetting001mb,Applicationsetting001hb])],
    providers: [ApplicationsettingService],
    controllers: [ApplicationsettingController],
  })
  export class ApplicationsettingModule {}
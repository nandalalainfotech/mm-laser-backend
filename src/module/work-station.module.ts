import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { WorkStationController } from "../controller/work-station.controller";
import { Workstation001hb } from "../entity/Workstation001hb";
import { Workstation001mb } from "../entity/Workstation001mb";
import { WorkStationService } from "../service/work-station.service";

@Module({
    imports: [TypeOrmModule.forFeature([Workstation001mb,Workstation001hb])],
    providers: [WorkStationService],
    controllers: [WorkStationController],
})
export class WorkStationModule {}
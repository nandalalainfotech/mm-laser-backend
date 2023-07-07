import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MachinemasterController } from "src/controller/machinemaster.controller";
import { Machinemaster001hb } from "src/entity/Machinemaster001hb";
import { Machinemaster001mb } from "src/entity/Machinemaster001mb";
import { User001mb } from "src/entity/User001mb";
import { MachinemasterService } from "src/service/machinemaster.service";


@Module({
    imports: [TypeOrmModule.forFeature([Machinemaster001mb, Machinemaster001hb,User001mb])],
    providers: [MachinemasterService],
    controllers: [MachinemasterController]
})

export class MachinemasterModule { }
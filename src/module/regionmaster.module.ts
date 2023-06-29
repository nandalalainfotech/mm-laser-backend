import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RegionmasterController } from "src/controller/regionmaster.controller";
import { Regionmaster001hb } from "src/entity/Regionmaster001hb";
import { Regionmaster001mb } from "src/entity/Regionmaster001mb";
import { RegionmasterService } from "src/service/regionmaster.service";


@Module({
    imports: [TypeOrmModule.forFeature([Regionmaster001mb, Regionmaster001hb])],
    providers: [RegionmasterService],
    controllers: [RegionmasterController]
})

export class RegionmasterModule { }
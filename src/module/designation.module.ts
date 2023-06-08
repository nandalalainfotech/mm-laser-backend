import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DesignationController } from "../controller/designation.controller";
import { Designation001hb } from "../entity/Designation001hb";
import { Designation001mb } from "../entity/Designation001mb";
import { DesignationService } from "../service/designation.service";


@Module({
    imports: [TypeOrmModule.forFeature([Designation001mb,Designation001hb])],
    providers: [DesignationService],
    controllers: [DesignationController]
})

export class DesignationModule {}
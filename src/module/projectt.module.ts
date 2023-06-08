import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProjecttController } from "../controller/projectt.controller";
import { Project001hb } from "../entity/Project001hb";
import { Project001mb } from "../entity/Project001mb";
import { ProjecttService } from "../service/projectt.service";

@Module({
    imports: [TypeOrmModule.forFeature([Project001mb,Project001hb])],
    providers: [ProjecttService],
    controllers: [ProjecttController]
})

export class ProjecttModule {}
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DepartmentController } from "../controller/department.controller";
import { Department001hb } from "../entity/Department001hb";
import { Department001mb } from "../entity/Department001mb";
import { DepartmentService } from "../service/department.service";


@Module({
    imports: [TypeOrmModule.forFeature([Department001mb,Department001hb])],
    providers: [DepartmentService],
    controllers: [DepartmentController]
})

export class DepartmentModule { }
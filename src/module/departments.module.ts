import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DepartmentsController } from "../controller/departments.controller";
import { Departments001hb } from "../entity/Departments001hb";
import { Departments001mb } from "../entity/Departments001mb";
import { DepartmentsService } from "../service/departments.service";




@Module({
    imports: [TypeOrmModule.forFeature([Departments001mb,Departments001hb])],
    providers: [DepartmentsService],
    controllers: [DepartmentsController]
})

export class DepartmentsModule { }
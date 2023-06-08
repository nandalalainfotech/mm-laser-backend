import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EmploymentTypeController } from "../controller/employment-type.controller";
import { Employmenttype001hb } from "../entity/Employmenttype001hb";
import { Employmenttype001mb } from "../entity/Employmenttype001mb";
import { EmploymentTypeService } from "../service/employment-type.service";


@Module({
    imports: [TypeOrmModule.forFeature([Employmenttype001mb,Employmenttype001hb])],
    providers: [EmploymentTypeService],
    controllers: [EmploymentTypeController]
})

export class EmploymentTypeModule { }
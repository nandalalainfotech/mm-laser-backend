import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EmpDeptController } from "../controller/emp-dept.controller";
import { Department001hb } from "../entity/Department001hb";
import { Department001mb } from "../entity/Department001mb";
import { EmpDeptService } from "../service/emp-dept.service";


@Module({
    imports: [TypeOrmModule.forFeature([Department001mb,Department001hb])],
    providers: [EmpDeptService],
    controllers: [EmpDeptController],
})
export class EmpDeptModule { }
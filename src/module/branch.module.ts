import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BranchController } from "../controller/branch.controller";
import { Branch001hb } from "../entity/Branch001hb";
import { Branch001mb } from "../entity/Branch001mb";
import { BranchService } from "../service/branch.service";

@Module({
    imports: [TypeOrmModule.forFeature([Branch001mb,Branch001hb])],
    providers: [BranchService],
    controllers: [BranchController]
})

export class BranchModule { }
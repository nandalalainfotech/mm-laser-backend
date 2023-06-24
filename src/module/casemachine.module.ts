import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CaseMachineController } from "src/controller/casemachine.controller";
import { Casemachine001hb } from "src/entity/Casemachine001hb";
import { Casemachine001wb } from "src/entity/Casemachine001wb";
import { CasemachineService } from "src/service/casemachine.service";

@Module({
    imports: [TypeOrmModule.forFeature([Casemachine001wb, Casemachine001hb])],
    providers: [CasemachineService],
    controllers: [CaseMachineController],
})
export class CasemachineModule { }
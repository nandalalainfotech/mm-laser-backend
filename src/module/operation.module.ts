import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OperationController } from "../controller/operation.controller";
import { Operationbom001hb } from "../entity/Operationbom001hb";
import { Operationbom001mb } from "../entity/Operationbom001mb";
import { OperationService } from "../service/operation.service";

@Module({
    imports: [TypeOrmModule.forFeature([Operationbom001mb,Operationbom001hb])],
    providers: [OperationService],
    controllers: [OperationController],
})

export class OperationModule {}
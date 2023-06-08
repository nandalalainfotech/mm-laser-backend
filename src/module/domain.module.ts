import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DomainController } from "../controller/domain.controller";
import { Domain001hb } from "../entity/Domain001hb";
import { Domain001mb } from "../entity/Domain001mb";
import { DomainService } from "../service/domain.service";



@Module({
    imports: [TypeOrmModule.forFeature([Domain001mb,Domain001hb])],
    providers: [DomainService],
    controllers: [DomainController]
})

export class DomainModule { }
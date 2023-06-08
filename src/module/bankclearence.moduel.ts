import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BankClearenceController } from "../controller/bankclearence.controller";
import { Bankclearance001hb } from "../entity/Bankclearance001hb";
import { Bankclearance001mb } from "../entity/Bankclearance001mb";
import { BankClearenceService } from "../service/bankclearence.service";

@Module({
    imports: [TypeOrmModule.forFeature([Bankclearance001mb,Bankclearance001hb])],
    providers: [BankClearenceService],
    controllers: [BankClearenceController],
  })
  export class BankClearenceModule {}    
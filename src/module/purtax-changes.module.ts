import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PurTaxChangesController } from "../controller/purtax-changes.controller";
import { Purtaxcharges001hb } from "../entity/Purtaxcharges001hb";
import { Purtaxcharges001mb } from "../entity/Purtaxcharges001mb";
import { PurTaxChangesService } from "../service/purtax-changes.service";

@Module({
    imports: [TypeOrmModule.forFeature([Purtaxcharges001mb,Purtaxcharges001hb])],
    providers: [PurTaxChangesService],
    controllers: [PurTaxChangesController],
  })
  export class PurTaxChangesModule {}
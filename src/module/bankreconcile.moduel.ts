import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BankreConcileController } from "../controller/bankreconcile.controller";
import { Bankreconcile001hb } from "../entity/Bankreconcile001hb";
import { Bankreconcile001mb } from "../entity/Bankreconcile001mb";
import { BankreConcileService } from "../service/bankreconcile.service";

@Module({
    imports: [TypeOrmModule.forFeature([Bankreconcile001mb,Bankreconcile001hb])],
    providers: [BankreConcileService],
    controllers: [BankreConcileController],
  })
  export class BankreconcileModule {}
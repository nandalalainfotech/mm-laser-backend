import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ApplanguagesettingController } from "../controller/applanguagesetting.controller";
import { Applanguagesetting001hb } from "../entity/Applanguagesetting001hb";
import { Applanguagesetting001mb } from "../entity/Applanguagesetting001mb";
import { ApplanguagesettingService } from "../service/applanguagesetting.service";

@Module({
    imports: [TypeOrmModule.forFeature([Applanguagesetting001mb,Applanguagesetting001hb])],
    providers: [ApplanguagesettingService],
    controllers: [ApplanguagesettingController],
  })
  export class ApplanguagesettingModule {}
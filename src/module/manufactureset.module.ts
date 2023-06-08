import { TypeOrmModule } from "@nestjs/typeorm/dist/typeorm.module";
import { Module } from '@nestjs/common';
import { ManufactureSetService } from "../service/manufacture-set.service";
import { ManufactureSetController } from "../controller/manufacture-set.controller";
import { Manufactureset001hb } from "../entity/Manufactureset001hb";
import { Manufactureset001mb } from "../entity/Manufactureset001mb";

@Module({
    imports: [TypeOrmModule.forFeature([Manufactureset001mb,Manufactureset001hb])],
    providers: [ManufactureSetService],
    controllers: [ManufactureSetController],
  })
  export class ManufacturesetModule {}
  
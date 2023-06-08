import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProdBundleController } from "../controller/prod-bundle.controller";
import { Prodbundle001hb } from "../entity/Prodbundle001hb";
import { Prodbundle001mb } from "../entity/Prodbundle001mb";
import { ProdBundleService } from "../service/prod-bundle.service";

@Module({
    imports: [TypeOrmModule.forFeature([Prodbundle001mb,Prodbundle001hb])],
    providers: [ProdBundleService],
    controllers: [ProdBundleController],
})
export class ProdBundleModule { }

import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AssetController } from "../controller/asset.controller";
import { Asset001hb } from "../entity/Asset001hb";
import { Asset001mb } from "../entity/Asset001mb";
import { AssetService } from "../service/asset.service";

@Module({
    imports: [TypeOrmModule.forFeature([Asset001mb,Asset001hb])],
    providers: [AssetService],
    controllers: [AssetController],
})
export class AssetModule { }

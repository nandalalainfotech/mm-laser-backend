import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssetMovementController } from '../controller/asset-movement.controller';
import { Assetmovement001hb } from '../entity/Assetmovement001hb';
import { Assetmovement001mb } from '../entity/Assetmovement001mb';
import { AssetMovementService } from '../service/asset-movement.service';


@Module({
    imports: [TypeOrmModule.forFeature([Assetmovement001mb,Assetmovement001hb])],
    providers: [AssetMovementService],
    controllers: [AssetMovementController],
})
export class AssetMovementModule { }

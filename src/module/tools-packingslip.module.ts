import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToolsPackageSlipController } from '../controller/tools-packingslip.controller';
import { Packingslip001hb } from '../entity/Packingslip001hb';
import { Packingslip001mb } from '../entity/Packingslip001mb';
import { ToolsPackingSlipService } from '../service/tools-packingslip.service';

@Module({
    imports: [TypeOrmModule.forFeature([Packingslip001mb,Packingslip001hb])],
    providers: [ToolsPackingSlipService],
    controllers: [ToolsPackageSlipController],
})
export class ToolsPackingSlipModule { }
    
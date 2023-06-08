import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BomTypeController } from '../controller/bom-type.controller';
import { Bomtype001hb } from '../entity/Bomtype001hb';
import { Bomtype001mb } from '../entity/Bomtype001mb';
import { BomTypeService } from '../service/bom-type.service';

@Module({
    imports: [TypeOrmModule.forFeature([Bomtype001mb,Bomtype001hb])],
    providers: [BomTypeService],
    controllers: [BomTypeController],
})
export class BomTypeModule { }

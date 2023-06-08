import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnitofMeasureController } from '../controller/unit-of-measure.controller';
import { Unitofmeasure001hb } from '../entity/Unitofmeasure001hb';
import { Unitofmeasure001mb } from '../entity/Unitofmeasure001mb';
import { UnitofMeasureService } from '../service/unit-of-measure.service';

@Module({
    imports: [TypeOrmModule.forFeature([Unitofmeasure001mb,Unitofmeasure001hb])],
    providers: [UnitofMeasureService],
    controllers: [UnitofMeasureController],
})
export class UnitofMeasureModule { }
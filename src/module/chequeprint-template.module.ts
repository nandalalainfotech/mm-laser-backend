import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChequeprintTemplateController } from '../controller/chequeprint-template.controller';
import { Chequetemplate001hb } from '../entity/Chequetemplate001hb';
import { Chequetemplate001mb } from '../entity/Chequetemplate001mb';
import { ChequeprintTemplateService } from '../service/chequeprint-template.service';


@Module({
    imports: [TypeOrmModule.forFeature([Chequetemplate001mb,Chequetemplate001hb])],
    providers: [ChequeprintTemplateService],
    controllers: [ChequeprintTemplateController],
})
export class ChequeprintTemplateModule { }

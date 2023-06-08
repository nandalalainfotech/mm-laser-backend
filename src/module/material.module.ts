import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Materialcontroller } from '../controller/material.controller';
import { Itemdt001hb } from '../entity/Itemdt001hb';
import { Itemdt001mb } from '../entity/Itemdt001mb';
import { Materialservice } from '../service/material.service';

@Module({
    imports: [TypeOrmModule.forFeature([Itemdt001mb,Itemdt001hb])],
    providers: [Materialservice],
    controllers: [Materialcontroller],
})

export class MaterialModule { }
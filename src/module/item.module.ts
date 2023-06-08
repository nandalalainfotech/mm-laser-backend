import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Itemcontroller } from '../controller/item.controller';
import { Itemdt001hb } from '../entity/Itemdt001hb';
import { Itemdt001mb } from '../entity/Itemdt001mb';
import { Itemservice } from '../service/item.service';

@Module({
    imports: [TypeOrmModule.forFeature([Itemdt001mb,Itemdt001hb])],
    providers: [Itemservice],
    controllers: [Itemcontroller],
})

export class ItemModule { }
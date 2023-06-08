import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Toolcontroller } from '../controller/manu-tool.controller';
import { Itemdt001hb } from '../entity/Itemdt001hb';
import { Itemdt001mb } from '../entity/Itemdt001mb';
import { Toolservice } from '../service/manu-tool.service';

@Module({
    imports: [TypeOrmModule.forFeature([Itemdt001mb,Itemdt001hb])],
    providers: [Toolservice],
    controllers: [Toolcontroller],
})

export class ToolsModule { }
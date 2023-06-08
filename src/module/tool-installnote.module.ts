import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToolsInstallNoteController } from '../controller/tools-instalnote.controller';
import { Instalnote001hb } from '../entity/Instalnote001hb';
import { Instalnote001mb } from '../entity/Instalnote001mb';
import { ToolsInstallNoteService } from '../service/tool-installnote.service';

@Module({
    imports: [TypeOrmModule.forFeature([Instalnote001mb,Instalnote001hb])],
    providers: [ToolsInstallNoteService],
    controllers: [ToolsInstallNoteController],
})
export class ToolsInstallNoteModule { }

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToolsStkReconcileController } from '../controller/tools-stkreconcile.controller';
import { Stkreconcile001hb } from '../entity/Stkreconcile001hb';
import { Stkreconcile001mb } from '../entity/Stkreconcile001mb';
import { ToolsStkReconcileService } from '../service/tools-stkreconcile.service';

@Module({
    imports: [TypeOrmModule.forFeature([Stkreconcile001mb,Stkreconcile001hb])],
    providers: [ToolsStkReconcileService],
    controllers: [ToolsStkReconcileController],
})
export class ToolsStkReconcileModule { }
    
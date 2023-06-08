import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatreqSupwiseController } from '../controller/matreq-supwise.controller';
import { Matreqsunotcreate001hb } from '../entity/Matreqsunotcreate001hb';
import { Matreqsunotcreate001mb } from '../entity/Matreqsunotcreate001mb';
import { MatreqSupwiseService } from '../service/matreq-supwise.service';


@Module({
    imports: [TypeOrmModule.forFeature([Matreqsunotcreate001mb,Matreqsunotcreate001hb])],
    providers: [MatreqSupwiseService],
    controllers: [MatreqSupwiseController],
})
export class MatreqSupwiseModule { }
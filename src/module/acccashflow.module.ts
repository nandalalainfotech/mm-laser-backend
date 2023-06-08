import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccCashFlowController } from '../controller/acccashflow.controller';
import { Acccashflow001hb } from '../entity/Acccashflow001hb';
import { Acccashflow001mb } from '../entity/Acccashflow001mb';
import { AccCashFlowService } from '../service/acccashflow.service';

@Module({
    imports: [TypeOrmModule.forFeature([Acccashflow001mb,Acccashflow001hb])],
    providers: [AccCashFlowService],
    controllers: [AccCashFlowController],
  })
  export class AcccashflowtModule {}
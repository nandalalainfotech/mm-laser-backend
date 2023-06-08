import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrmatReqtController } from '../controller/prmat-req.controller';
import { Prmatreq001hb } from '../entity/Prmatreq001hb';
import { Prmatreq001mb } from '../entity/Prmatreq001mb';
import { PrmatReqService } from '../service/prmat-req.service';

@Module({
  imports: [TypeOrmModule.forFeature([Prmatreq001mb,Prmatreq001hb])],
  providers: [PrmatReqService],
  controllers: [PrmatReqtController],
})
export class PrmatReqtModule {}

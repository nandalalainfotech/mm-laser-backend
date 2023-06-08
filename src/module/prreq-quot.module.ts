import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrreqQuotController } from '../controller/prreq-quot.controller';
import { Prreqquot001hb } from '../entity/Prreqquot001hb';
import { Prreqquot001mb } from '../entity/Prreqquot001mb';
import { PrreqQuotService } from '../service/prreq-quot.service';

@Module({
  imports: [TypeOrmModule.forFeature([Prreqquot001mb,Prreqquot001hb])],
  providers: [PrreqQuotService],
  controllers: [PrreqQuotController],
})
export class PrreqQuotModule {}

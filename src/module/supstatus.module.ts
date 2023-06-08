import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupStatusController } from '../controller/supstatus.controller';
import { Supstatus001hb } from '../entity/Supstatus001hb';
import { Supstatus001mb } from '../entity/Supstatus001mb';
import { SupStatusService } from '../service/supstatus.service';

@Module({
  imports: [TypeOrmModule.forFeature([Supstatus001mb,Supstatus001hb])],
  providers: [SupStatusService],
  controllers: [SupStatusController],
})
export class SupStatusModule {}
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HrProcessPrController } from '../controller/hr-processpr.controller';
import { Processpr001hb } from '../entity/Processpr001hb';
import { Processpr001mb } from '../entity/Processpr001mb';
import { HrProcessPrService } from '../service/hr-processpr.service';

@Module({
  imports: [TypeOrmModule.forFeature([Processpr001mb,Processpr001hb])],
  providers: [HrProcessPrService],
  controllers: [HrProcessPrController],
})
export class HrProcessPrModule {}

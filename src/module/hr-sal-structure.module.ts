import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HrSalaryStructureController } from '../controller/hr-sal-structure.controller';
import { Salarystructure001hb } from '../entity/Salarystructure001hb';
import { Salarystructure001mb } from '../entity/Salarystructure001mb';
import { HrSalaryStructureService } from '../service/hr-sal-structure.service';

@Module({
  imports: [TypeOrmModule.forFeature([Salarystructure001mb,Salarystructure001hb])],
  providers: [HrSalaryStructureService],
  controllers: [HrSalaryStructureController],
})
export class HrSalStructureModule {}

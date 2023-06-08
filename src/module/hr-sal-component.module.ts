import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HrSalComponentController } from '../controller/hr-sal-component.controller';
import { Salarycomponent001hb } from '../entity/Salarycomponent001hb';
import { Salarycomponent001mb } from '../entity/Salarycomponent001mb';
import { HrSalComponentService } from '../service/hr-sal-component.service';

@Module({
  imports: [TypeOrmModule.forFeature([Salarycomponent001mb,Salarycomponent001hb])],
  providers: [HrSalComponentService],
  controllers: [HrSalComponentController],
})
export class HrSalaryComponentModule {}

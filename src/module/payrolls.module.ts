import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PayRollsController } from '../controller/payrolls.controller';
import { Payroll001hb } from '../entity/Payroll001hb';
import { Payroll001mb } from '../entity/Payroll001mb';
import { PayRollsService } from '../service/payrolls.service';

@Module({
  imports: [TypeOrmModule.forFeature([Payroll001mb,Payroll001hb])],
  providers: [PayRollsService],
  controllers: [PayRollsController],
})
export class PayRollsModule {}

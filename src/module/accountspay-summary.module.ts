import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsPaySummaryController } from '../controller/accountspay-summary.controller';
import { Accountspayable001hb } from '../entity/Accountspayable001hb';
import { Accountspayable001mb } from '../entity/Accountspayable001mb';
import { AccountspaySummaryService } from '../service/accountspay-summary.service';

@Module({
  imports: [TypeOrmModule.forFeature([Accountspayable001mb,Accountspayable001hb])],
  providers: [AccountspaySummaryService],
  controllers: [AccountsPaySummaryController],
})
export class AccountsPayableSummaryModule {}

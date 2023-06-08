import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsrecSummaryController } from '../controller/accountsrec-summary.controller';
import { Accountsreceivable001hb } from '../entity/Accountsreceivable001hb';
import { Accountsreceivable001mb } from '../entity/Accountsreceivable001mb';
import { AccountsrecSummaryService } from '../service/accountsrec-summary.service';

@Module({
  imports: [TypeOrmModule.forFeature([Accountsreceivable001mb,Accountsreceivable001hb])],
  providers: [AccountsrecSummaryService],
  controllers: [AccountsrecSummaryController],
})
export class AccountsrecSummaryModule {}

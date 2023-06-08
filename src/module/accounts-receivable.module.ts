import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsReceivableController } from '../controller/accounts-receivable.controller';
import { Accountsreceivable001hb } from '../entity/Accountsreceivable001hb';
import { Accountsreceivable001mb } from '../entity/Accountsreceivable001mb';
import { AccountsreceivableService } from '../service/accounts-receivable.service';

@Module({
  imports: [TypeOrmModule.forFeature([Accountsreceivable001mb, Accountsreceivable001hb])],
  providers: [AccountsreceivableService],
  controllers: [AccountsReceivableController],
})
export class AccountsReceivableModule { }

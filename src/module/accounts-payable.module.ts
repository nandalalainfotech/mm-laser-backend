import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsPayableController } from '../controller/accounts-payable.controller';
import { Accountspayable001hb } from '../entity/Accountspayable001hb';
import { Accountspayable001mb } from '../entity/Accountspayable001mb';
import { AccountspayableService } from '../service/accounts-payable.service';

@Module({
  imports: [TypeOrmModule.forFeature([Accountspayable001mb,Accountspayable001hb])],
  providers: [AccountspayableService],
  controllers: [AccountsPayableController],
})
export class AccountsPayableModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PayementEntryController } from '../controller/payement-entry.controller';
import { Paymententry001hb } from '../entity/Paymententry001hb';
import { Paymententry001mb } from '../entity/Paymententry001mb';
import { PayementEntryService } from '../service/payement-entry.service';


@Module({
  imports: [TypeOrmModule.forFeature([Paymententry001mb,Paymententry001hb])],
  providers: [PayementEntryService],
  controllers: [PayementEntryController],
})
export class PayementEntryModule {}

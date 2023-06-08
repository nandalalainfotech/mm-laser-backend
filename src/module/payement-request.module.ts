import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PayementRequestController } from '../controller/payement-request.controller';
import { Paymentrequest001hb } from '../entity/Paymentrequest001hb';
import { Paymentrequest001mb } from '../entity/Paymentrequest001mb';
import { PayementRequestService } from '../service/payement-request.service';


@Module({
  imports: [TypeOrmModule.forFeature([Paymentrequest001mb,Paymentrequest001hb])],
  providers: [PayementRequestService],
  controllers: [PayementRequestController],
})
export class PayementRequestModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestItemTransferController } from '../controller/request-item-transfer.controller';
import { Reqitemtransfer001hb } from '../entity/Reqitemtransfer001hb';
import { Reqitemtransfer001mb } from '../entity/Reqitemtransfer001mb';
import { RequestItemTransferService } from '../service/request-item-transfer.service';

@Module({
  imports: [TypeOrmModule.forFeature([Reqitemtransfer001mb,Reqitemtransfer001hb])],
  providers: [RequestItemTransferService],
  controllers: [RequestItemTransferController],
})
export class RequestItemTransferModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrmCommunicationController } from '../controller/crm-communication.controller';
import { Communication001hb } from '../entity/Communication001hb';
import { Communication001mb } from '../entity/Communication001mb';
import { CrmCommunicationService } from '../service/crm-communication.service';

@Module({
  imports: [TypeOrmModule.forFeature([Communication001mb,Communication001hb])],
  providers: [CrmCommunicationService],
  controllers: [CrmCommunicationController],
})
export class CrmCommunicationModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrmCustGroupController } from '../controller/crm-cust-group.controller';
import { Setupcugrp001hb } from '../entity/Setupcugrp001hb';
import { Setupcugrp001mb } from '../entity/Setupcugrp001mb';
import { CrmCustGroupService } from '../service/crm-cust-group.service';

@Module({
  imports: [TypeOrmModule.forFeature([Setupcugrp001mb,Setupcugrp001hb])],
  providers: [CrmCustGroupService],
  controllers: [CrmCustGroupController],
})
export class CrmCustGroupModule {}

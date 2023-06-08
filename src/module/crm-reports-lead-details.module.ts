import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrmRepLeadDetailsController } from '../controller/crm-reports-lead-details.controller';
import { Leaddetail001hb } from '../entity/Leaddetail001hb';
import { Leaddetail001mb } from '../entity/Leaddetail001mb';
import { CrmRepLeadDetailsService } from '../service/crm-reports-lead-details.servicee';

@Module({
  imports: [TypeOrmModule.forFeature([Leaddetail001mb,Leaddetail001hb])],
  providers: [CrmRepLeadDetailsService],
  controllers: [CrmRepLeadDetailsController],
})
export class CrmRepLeadDetailsModule {}

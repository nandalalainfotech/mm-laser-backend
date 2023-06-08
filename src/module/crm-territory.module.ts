import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrmTerritoryController } from '../controller/crm-territory.controller';
import { Territory001hb } from '../entity/Territory001hb';
import { Territory001mb } from '../entity/Territory001mb';
import { CrmTerritoryService } from '../service/crm-territory.service';

@Module({
  imports: [TypeOrmModule.forFeature([Territory001mb,Territory001hb])],
  providers: [CrmTerritoryService],
  controllers: [CrmTerritoryController],
})
export class CrmTerritoryModule {}

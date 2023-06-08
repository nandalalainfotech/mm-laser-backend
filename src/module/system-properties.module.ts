import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SystemPropertiesController } from '../controller/system-properties.controller';
import { Systemproperties001hb } from '../entity/Systemproperties001hb';
import { Systemproperties001mb } from '../entity/Systemproperties001mb';
import { SystemPropertiesService } from '../service/system-properties.service';

@Module({
  imports: [TypeOrmModule.forFeature([Systemproperties001mb,Systemproperties001hb])],
  providers: [SystemPropertiesService],
  controllers: [SystemPropertiesController],
})
export class SystemPropertiesModule {}

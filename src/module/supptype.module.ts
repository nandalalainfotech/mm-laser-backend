import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuppTypeController } from '../controller/supptype.controller';
import { Supptype001hb } from '../entity/Supptype001hb';
import { Supptype001mb } from '../entity/Supptype001mb';
import { SuppTypeService } from '../service/supptype.service';

@Module({
  imports: [TypeOrmModule.forFeature([Supptype001mb,Supptype001hb])],
  providers: [SuppTypeService],
  controllers: [SuppTypeController],
})
export class SuppTypeModule {}
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrmRepMiniTimeController } from '../controller/crm-rep-minitime.controller';
import { Crmmintoresp001hb } from '../entity/Crmmintoresp001hb';
import { Crmmintoresp001mb } from '../entity/Crmmintoresp001mb';
import { CrmRepMiniTimeService } from '../service/crm-rep-minitime.service';

@Module({
    imports: [TypeOrmModule.forFeature([Crmmintoresp001mb,Crmmintoresp001hb])],
    providers: [CrmRepMiniTimeService],
    controllers: [CrmRepMiniTimeController],
})
export class CrmRepMiniTimeModule { }

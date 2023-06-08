import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobOpeningController } from '../controller/job-opening.controller';
import { Recruitopening001hb } from '../entity/Recruitopening001hb';
import { Recruitopening001mb } from '../entity/Recruitopening001mb';
import { JobOpeningService } from '../service/job-opening.service';


@Module({
    imports: [TypeOrmModule.forFeature([Recruitopening001mb,Recruitopening001hb])],
    providers: [JobOpeningService],
    controllers: [JobOpeningController],
})
export class JobOpeningModule { }
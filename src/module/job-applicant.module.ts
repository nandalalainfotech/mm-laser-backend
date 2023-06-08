import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobApplicantController } from '../controller/job-applicant.controller';
import { Recruitapplicant001hb } from '../entity/Recruitapplicant001hb';
import { Recruitapplicant001mb } from '../entity/Recruitapplicant001mb';
import { JobApplicantService } from '../service/job-applicant.service';


@Module({
    imports: [TypeOrmModule.forFeature([Recruitapplicant001mb,Recruitapplicant001hb])],
    providers: [JobApplicantService],
    controllers: [JobApplicantController],
})
export class JobApplicantModule { }
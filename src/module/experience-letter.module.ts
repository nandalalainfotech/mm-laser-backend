import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExperienceLetterController } from '../controller/experience-letter.controller';
import { Recruitworkingexperience001hb } from '../entity/Recruitworkingexperience001hb';
import { Recruitworkingexperience001mb } from '../entity/Recruitworkingexperience001mb';
import { ExperienceLetterService } from '../service/experience-letter.service';


@Module({
  imports: [TypeOrmModule.forFeature([Recruitworkingexperience001mb,Recruitworkingexperience001hb])],
  providers: [ExperienceLetterService],
  controllers: [ ExperienceLetterController],
})
export class  ExperienceLetterModule {}
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RelievingLetterController } from '../controller/relieving-letter.controller';
import { Recruitrelieving001hb } from '../entity/Recruitrelieving001hb';
import { Recruitrelieving001mb } from '../entity/Recruitrelieving001mb';
import { RelievingLetterService } from '../service/relieving-letter.service';


@Module({
    imports: [TypeOrmModule.forFeature([Recruitrelieving001mb,Recruitrelieving001hb])],
    providers: [RelievingLetterService],
    controllers: [RelievingLetterController],
})
export class RelievingLetterModule { }
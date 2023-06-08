import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OfferLetterController } from '../controller/offer-letter.controller';
import { Recruitoffer001hb } from '../entity/Recruitoffer001hb';
import { Recruitoffer001mb } from '../entity/Recruitoffer001mb';
import { OfferLetterService } from '../service/offer-letter.service';


@Module({
    imports: [TypeOrmModule.forFeature([Recruitoffer001mb,Recruitoffer001hb])],
    providers: [OfferLetterService],
    controllers: [OfferLetterController],
})
export class OfferLetterModule { }
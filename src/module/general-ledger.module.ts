import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeneralLedgerController } from '../controller/general-ledger.controller';
import { Accgenledge001hb } from '../entity/Accgenledge001hb';
import { Accgenledge001mb } from '../entity/Accgenledge001mb';
import { GeneralLedgerService } from '../service/general-ledger.service';

@Module({
    imports: [TypeOrmModule.forFeature([Accgenledge001mb,Accgenledge001hb])],
    providers: [GeneralLedgerService],
    controllers: [GeneralLedgerController],
})
export class GeneralLedgerModule { }
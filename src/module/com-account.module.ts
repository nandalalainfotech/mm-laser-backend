import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComAccountController } from '../controller/com-account.controller';
import { Companyaccount001hb } from '../entity/Companyaccount001hb';
import { Companyaccount001mb } from '../entity/Companyaccount001mb';
import { ComAccountService } from '../service/com-account.service';

@Module({
    imports: [TypeOrmModule.forFeature([Companyaccount001mb,Companyaccount001hb])],
    providers: [ComAccountService],
    controllers: [ComAccountController],
})
export class ComAccountModule { }
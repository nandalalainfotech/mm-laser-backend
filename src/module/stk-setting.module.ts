import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockSettingController } from '../controller/stk-setting.controller';
import { Stksettings001hb } from '../entity/Stksettings001hb';
import { Stksettings001mb } from '../entity/Stksettings001mb';
import { StockSettingService } from '../service/stk-setting.service';

@Module({
    imports: [TypeOrmModule.forFeature([Stksettings001mb,Stksettings001hb])],
    providers: [StockSettingService],
    controllers: [StockSettingController],
})
export class StockSettingModule { }
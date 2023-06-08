import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandController } from '../controller/brand.controller';
import { Brand001hb } from '../entity/Brand001hb';
import { Brand001mb } from '../entity/Brand001mb';
import { BrandService } from '../service/brand.service';

@Module({
    imports: [TypeOrmModule.forFeature([Brand001mb,Brand001hb])],
    providers: [BrandService],
    controllers: [BrandController],
})
export class BrandModule { }
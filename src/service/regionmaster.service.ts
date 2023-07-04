import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegionmasterDTO } from 'src/dto/Regionmaster.dto';
import { Regionmaster001hb } from 'src/entity/Regionmaster001hb';
import { Regionmaster001mb } from 'src/entity/Regionmaster001mb';
import { Repository } from "typeorm";
var path = require('path');
var pdf = require("pdf-creator-node");
var path = require('path');
const excel = require('exceljs');
var fs = require("fs");


@Injectable()
export class RegionmasterService {
    constructor(@InjectRepository(Regionmaster001mb) private readonly regionmasterRepository: Repository<Regionmaster001mb>,
        @InjectRepository(Regionmaster001hb) private readonly regionmasterhbRepository: Repository<Regionmaster001hb>) { }

    async create(regionmasterDTO: RegionmasterDTO): Promise<Regionmaster001mb> {
        const regionmaster001mb = new Regionmaster001mb();
        regionmaster001mb.setProperties(regionmasterDTO);
        return this.regionmasterRepository.save(regionmaster001mb);
    }

    async update(regionmasterDTO: RegionmasterDTO): Promise<Regionmaster001mb> {
        const regionmaster001mb = new Regionmaster001mb();
        regionmaster001mb.setProperties(regionmasterDTO);
        await this.regionmasterRepository.update({ slNo: regionmaster001mb.slNo }, regionmaster001mb);
        return regionmaster001mb;
    }


    async findAll(username: any): Promise<Regionmaster001mb[]> {
        let regionmaster001mbs: Regionmaster001mb[] = [];
        regionmaster001mbs = await this.regionmasterRepository.find({
            where: { insertUser: username }, order: { slNo: "DESC" }
        });

        return regionmaster001mbs;
    }


    findOne(id: string): Promise<Regionmaster001mb> {
        return this.regionmasterRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        let regionmaster = this.regionmasterRepository.findOne(id);
        let regionmaster001hb = new Regionmaster001hb();
        regionmaster001hb.setProperties((await regionmaster));
        this.regionmasterhbRepository.save(regionmaster001hb);
        await this.regionmasterRepository.delete(id);
    }

}
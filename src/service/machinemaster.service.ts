import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MachinemasterDTO } from 'src/dto/Machinemaster.dto';
import { Machinemaster001hb } from 'src/entity/Machinemaster001hb';
import { Machinemaster001mb } from 'src/entity/Machinemaster001mb';
import { Repository } from "typeorm";
var path = require('path');
var pdf = require("pdf-creator-node");
var path = require('path');
const excel = require('exceljs');
var fs = require("fs");


@Injectable()
export class MachinemasterService {
    constructor(@InjectRepository(Machinemaster001mb) private readonly machinemasterRepository: Repository<Machinemaster001mb>,
        @InjectRepository(Machinemaster001hb) private readonly machinemasterhbRepository: Repository<Machinemaster001hb>) { }

    async create(machinemasterDTO: MachinemasterDTO): Promise<Machinemaster001mb> {
        console.log("machinemasterDTO---service", machinemasterDTO);
        const machinemaster001mb = new Machinemaster001mb();
        machinemaster001mb.setProperties(machinemasterDTO);
        return this.machinemasterRepository.save(machinemaster001mb);
    }

    async update(machinemasterDTO: MachinemasterDTO): Promise<Machinemaster001mb> {
        const machinemaster001mb = new Machinemaster001mb();
        machinemaster001mb.setProperties(machinemasterDTO);
        await this.machinemasterRepository.update({ slNo: machinemaster001mb.slNo }, machinemaster001mb);
        return machinemaster001mb;
    }

    async findAll(): Promise<Machinemaster001mb[]> {
        // return this.departmentsRepository.find();
        return this.machinemasterRepository.find();
    }


    findOne(id: string): Promise<Machinemaster001mb> {
        return this.machinemasterRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        let machinemaster = this.machinemasterRepository.findOne(id);
        let machinemaster001hb = new Machinemaster001hb();
        machinemaster001hb.setProperties((await machinemaster));
        this.machinemasterhbRepository.save(machinemaster001hb);
        await this.machinemasterRepository.delete(id);
    }

}
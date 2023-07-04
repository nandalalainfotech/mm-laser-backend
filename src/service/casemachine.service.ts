import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CasemachineDTO } from 'src/dto/Casemachine.dto';
import { Casemachine001hb } from 'src/entity/Casemachine001hb';
import { Casemachine001wb } from 'src/entity/Casemachine001wb';
import { Repository } from "typeorm";
var path = require('path');
var pdf = require("pdf-creator-node");
var path = require('path');
const excel = require('exceljs');
var fs = require("fs");


@Injectable()
export class CasemachineService {
    constructor(@InjectRepository(Casemachine001wb) private readonly casemachineRepository: Repository<Casemachine001wb>,
        @InjectRepository(Casemachine001hb) private readonly casemachinehpRepository: Repository<Casemachine001hb>) { }

    async create(casemachineDTO: CasemachineDTO): Promise<Casemachine001wb> {
        const casemachine001wb = new Casemachine001wb();
        casemachine001wb.setProperties(casemachineDTO);
        return this.casemachineRepository.save(casemachine001wb);
    }

    async update(casemachineDTO: CasemachineDTO): Promise<Casemachine001wb> {
        const casemachine001wb = new Casemachine001wb();
        casemachine001wb.setProperties(casemachineDTO);
        await this.casemachineRepository.update({ slno: casemachine001wb.slno }, casemachine001wb);
        return casemachine001wb;
    }

    async findAll(username: any): Promise<Casemachine001wb[]> {
        let casemachine001wbs: Casemachine001wb[] = [];
        casemachine001wbs = await this.casemachineRepository.find({
            where: { insertUser: username }, relations: ['cslno2']
        });

        return casemachine001wbs;
    }

    findOne(id: string): Promise<Casemachine001wb> {
        return this.casemachineRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        let caseentry = this.casemachineRepository.findOne(id);
        let casemachine001hb = new Casemachine001hb();
        casemachine001hb.setProperties((await caseentry));
        this.casemachinehpRepository.save(casemachine001hb);
        await this.casemachineRepository.delete(id);
    }

}
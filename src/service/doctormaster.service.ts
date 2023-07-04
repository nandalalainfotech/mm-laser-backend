import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DoctormasterDTO } from 'src/dto/Doctormaster.dto';
import { Doctormaster001hb } from 'src/entity/Doctormaster001hb';
import { Doctormaster001mb } from 'src/entity/Doctormaster001mb';
import { Repository } from 'typeorm';
var pdf = require("pdf-creator-node");
const excel = require('exceljs');


@Injectable()
export class DoctormasterService {
    constructor(@InjectRepository(Doctormaster001mb) private readonly doctormasterRepository: Repository<Doctormaster001mb>,
        @InjectRepository(Doctormaster001hb) private readonly doctormasterhbRepository: Repository<Doctormaster001hb>) { }


    async create(doctormasterDTO: DoctormasterDTO): Promise<Doctormaster001mb> {
        // console.log("doctormasterDTO---->", doctormasterDTO);

        const doctormaster001mb = new Doctormaster001mb();
        doctormaster001mb.setProperties(doctormasterDTO);
        return this.doctormasterRepository.save(doctormaster001mb);
    }

    async update(doctormasterDTO: DoctormasterDTO): Promise<Doctormaster001mb> {
        const doctormaster001mb = new Doctormaster001mb();
        doctormaster001mb.setProperties(doctormasterDTO);
        await this.doctormasterRepository.update({ slNo: doctormaster001mb.slNo }, doctormaster001mb);
        return doctormaster001mb;
    }


    async findAll(username: any): Promise<Doctormaster001mb[]> {
        let doctormaster001mbs: Doctormaster001mb[] = [];
        doctormaster001mbs = await this.doctormasterRepository.find({
            where: { insertUser: username }, order: { slNo: "DESC" }
        });

        return doctormaster001mbs;
    }


    findOne(id: number): Promise<Doctormaster001mb> {
        return this.doctormasterRepository.findOne(id);
    }

    async remove(id: number): Promise<void> {
        let doctormaster = this.doctormasterRepository.findOne(id);
        let doctormaster001hb = new Doctormaster001mb();
        doctormaster001hb.setProperties((await doctormaster));
        this.doctormasterhbRepository.save(doctormaster001hb);
        await this.doctormasterRepository.delete(id);
    }
}



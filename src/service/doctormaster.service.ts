import { Injectable } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { DoctormasterDTO } from 'src/dto/Doctormaster.dto';
import { Doctormaster001hb } from 'src/entity/Doctormaster001hb';
import { Doctormaster001mb } from 'src/entity/Doctormaster001mb';
import { User001mb } from 'src/entity/User001mb';
import { MailService } from 'src/mail/mail.service';
import { Repository } from 'typeorm';
var pdf = require("pdf-creator-node");
const excel = require('exceljs');

@ApiBearerAuth()
@Injectable()
export class DoctormasterService {
    constructor(
        private mailService: MailService, @InjectRepository(Doctormaster001mb) private readonly doctormasterRepository: Repository<Doctormaster001mb>,
        @InjectRepository(Doctormaster001hb) private readonly doctormasterhbRepository: Repository<Doctormaster001hb>,
        @InjectRepository(User001mb) private readonly userRepository: Repository<User001mb>) { }


    async create(doctormasterDTO: DoctormasterDTO): Promise<Doctormaster001mb> {
        const doctormaster001mb = new Doctormaster001mb();
        doctormaster001mb.setProperties(doctormasterDTO);
        const {
            v4: uuidv4,
        } = require('uuid');
        uuidv4();
        doctormaster001mb.uuid = uuidv4();
        return this.doctormasterRepository.save(doctormaster001mb);
    }

    async update(doctormasterDTO: DoctormasterDTO): Promise<Doctormaster001mb> {
        const doctormaster001mb = new Doctormaster001mb();
        doctormaster001mb.setProperties(doctormasterDTO);
        await this.doctormasterRepository.update({ slNo: doctormaster001mb.slNo }, doctormaster001mb);
        return doctormaster001mb;
    }
    async findAll(): Promise<Doctormaster001mb[]> {
        let data: Doctormaster001mb[] | any;
        data = await this.doctormasterRepository.find();
        // console.log("data--------->dfdf", data); 
        await this.mailService.sendUserConfirmation1(data)
        return data;
    }

    findOne(id: number): Promise<Doctormaster001mb> {
        return this.doctormasterRepository.findOne(id);
    }

    // async remove(id: number): Promise<void> {
    //     let doctormaster = this.doctormasterRepository.findOne(id);
    //     let doctormaster001hb = new Doctormaster001mb();
    //     doctormaster001hb.setProperties((await doctormaster));
    //     this.doctormasterhbRepository.save(doctormaster001hb);
    //     await this.doctormasterRepository.delete(id);
    // }

    
    async remove(id: string): Promise<void> {
        await this.doctormasterRepository.delete(id);
    }
}



import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ApplanguagesettingDTO } from "../dto/Applanguagesetting.dto";
import { Applanguagesetting001hb } from "../entity/Applanguagesetting001hb";
import { Applanguagesetting001mb } from "../entity/Applanguagesetting001mb";
import { Repository } from "typeorm";
var pdf = require("pdf-creator-node");
const excel = require('exceljs');


@Injectable()
export class ApplanguagesettingService {

    constructor(@InjectRepository(Applanguagesetting001mb) private readonly applanguagesettingRepository: Repository<Applanguagesetting001mb>,
                @InjectRepository(Applanguagesetting001hb) private readonly applanguagesettinghbRepository: Repository<Applanguagesetting001hb>,) { }


    async create(applanguagesettingDTO: ApplanguagesettingDTO): Promise<Applanguagesetting001mb> {
        const applanguagesetting001mb = new Applanguagesetting001mb();
        applanguagesetting001mb.setProperties(applanguagesettingDTO);
        return this.applanguagesettingRepository.save(applanguagesetting001mb);
    }


    async update(applanguagesettingDTO: ApplanguagesettingDTO): Promise<Applanguagesetting001mb> {
        const applanguagesetting001mb = new Applanguagesetting001mb();
        applanguagesetting001mb.setProperties(applanguagesettingDTO);
        await this.applanguagesettingRepository.update({ id: applanguagesetting001mb.id }, applanguagesetting001mb);

        return this.applanguagesettingRepository.save(applanguagesetting001mb);
    }
    async findAll(): Promise<Applanguagesetting001mb[]> {
        return this.applanguagesettingRepository.find();
    }
    findOne(id: string): Promise<Applanguagesetting001mb> {
        return this.applanguagesettingRepository.findOne(id);
    }
    async remove(id: number): Promise<void> {
        let applanguagesetting = this.applanguagesettingRepository.findOne(id);
        let applanguagesetting001hb = new Applanguagesetting001hb();
        applanguagesetting001hb.setProperties((await applanguagesetting));
        this.applanguagesettinghbRepository.save(applanguagesetting001hb);
        await this.applanguagesettingRepository.delete(id);
    }

    // async remove(id: string): Promise<void> {
    //     let departments = this.departmentsRepository.findOne(id);
    //     let departments001hb = new Departments001hb();
    //     departments001hb.setProperties((await departments));
    //     this.departmentshbRepository.save(departments001hb);
    //     await this.departmentsRepository.delete(id);
    // }
        }
    

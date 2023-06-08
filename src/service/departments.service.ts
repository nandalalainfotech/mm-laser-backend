import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DepartmentsDTO } from '../dto/Departments.dto';
import { Departments001hb } from '../entity/Departments001hb';
import { Departments001mb } from '../entity/Departments001mb';
import { Repository } from "typeorm";
var path = require('path');
var pdf = require("pdf-creator-node");
var path = require('path');
const excel = require('exceljs');
var fs = require("fs");


@Injectable()
export class DepartmentsService {
    constructor(@InjectRepository(Departments001mb) private readonly departmentsRepository: Repository<Departments001mb>,
        @InjectRepository(Departments001hb) private readonly departmentshbRepository: Repository<Departments001hb>) { }

    async create(departmentsDTO: DepartmentsDTO): Promise<Departments001mb> {
        console.log("departmentsDTO---service", departmentsDTO);
        const departments001mb = new Departments001mb();
        departments001mb.setProperties(departmentsDTO);
        return this.departmentsRepository.save(departments001mb);
    }

    async update(departmentsDTO: DepartmentsDTO): Promise<Departments001mb> {
        const departments001mb = new Departments001mb();
        departments001mb.setProperties(departmentsDTO);
        await this.departmentsRepository.update({ slNo: departments001mb.slNo }, departments001mb);
        return departments001mb;
    }

    async findAll(): Promise<Departments001mb[]> {
        // return this.departmentsRepository.find();
        return this.departmentsRepository.find({ relations: ['domainslno2'] });
    }

    findOne(id: string): Promise<Departments001mb> {
        return this.departmentsRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        let departments = this.departmentsRepository.findOne(id);
        let departments001hb = new Departments001hb();
        departments001hb.setProperties((await departments));
        this.departmentshbRepository.save(departments001hb);
        await this.departmentsRepository.delete(id);
    }

}
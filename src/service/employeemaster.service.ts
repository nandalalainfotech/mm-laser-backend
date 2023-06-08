import { Injectable, Req, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Response } from "express";
import * as fs from 'fs';
import * as path from 'path';
import { EmployeeDTO } from '../dto/Employee.dto';
import { Employee001hb } from '../entity/Employee001hb';
import { Employee001mb } from '../entity/Employee001mb';
import { Request } from "supertest";
import { Repository } from 'typeorm';
import { Employeemaster001mb } from 'src/entity/Employeemaster001mb';
import { EmployeemasterDTO } from 'src/dto/Employeemaster.dto';
import { Employeemaster001hb } from 'src/entity/Employeemaster001hb';
var pdf = require("pdf-creator-node");
const excel = require('exceljs');


@Injectable()
export class
    EmployeemasterService {
    constructor(@InjectRepository(Employeemaster001mb) private readonly employeemasterRepository: Repository<Employeemaster001mb>,
        @InjectRepository(Employeemaster001hb) private readonly employeemasterhbRepository: Repository<Employeemaster001hb>) { }

    async create(employeemasterDTO: EmployeemasterDTO): Promise<Employeemaster001mb> {
        const employeemaster001mb = new Employeemaster001mb();
        employeemaster001mb.setProperties(employeemasterDTO);
        return this.employeemasterRepository.save(employeemaster001mb);
    }

    async update(employeemasterDTO: EmployeemasterDTO): Promise<Employeemaster001mb> {
        const employeemaster001mb = new Employeemaster001mb();
        employeemaster001mb.setProperties(employeemasterDTO);
        await this.employeemasterRepository.update({ employeeId: employeemaster001mb.employeeId }, employeemaster001mb);
        return employeemaster001mb;
    }

    async findAll(): Promise<Employeemaster001mb[]> {
        return this.employeemasterRepository.find();
    }

    findOne(id: string): Promise<Employeemaster001mb> {
        return this.employeemasterRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        let employeemaster = this.employeemasterRepository.findOne(id);
        let employeemaster001hb = new Employeemaster001mb();
        employeemaster001hb.setProperties((await employeemaster));
        this.employeemasterhbRepository.save(employeemaster001hb);
        await this.employeemasterRepository.delete(id);
    }
}



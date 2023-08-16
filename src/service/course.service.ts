import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegionmasterDTO } from 'src/dto/Regionmaster.dto';
import { CourseDTO } from 'src/dto/course.dto';
import { Regionmaster001hb } from 'src/entity/Regionmaster001hb';
import { Regionmaster001mb } from 'src/entity/Regionmaster001mb';
import { Course001mb } from 'src/entity/course001mb';
import { Repository } from "typeorm";
var path = require('path');
var pdf = require("pdf-creator-node");
var path = require('path');
const excel = require('exceljs');
var fs = require("fs");


@Injectable()
export class CourseService {
    constructor(@InjectRepository(Course001mb) private readonly courseRepository: Repository<Course001mb>,
       ) { }

    async create(courseDTO: CourseDTO): Promise<Course001mb> {
        console.log("courseDTO--s->11", courseDTO);
        
        const course001mb = new Course001mb();
        course001mb.setProperties(courseDTO);
        return this.courseRepository.save(course001mb);
    }

    async update(courseDTO: CourseDTO): Promise<Course001mb> {
        const course001mb = new Course001mb();
        course001mb.setProperties(courseDTO);
        await this.courseRepository.update({ slNo: course001mb.slNo }, course001mb);
        return course001mb;
    }


    async findAll(username: any): Promise<Course001mb[]> {
        console.log("test->>>>>14");
        
        let regionmaster001mbs: Course001mb[] = [];
        regionmaster001mbs = await this.courseRepository.find({
            where: { insertUser: username }, order: { slNo: "DESC" }
        });


        return regionmaster001mbs;
    }


    findOne(id: string): Promise<Course001mb> {
        return this.courseRepository.findOne();
    }

    async remove(id: string): Promise<void> {
        // let regionmaster = this.regionmasterRepository.findOne(id);
        // let regionmaster001hb = new Regionmaster001hb();
        // regionmaster001hb.setProperties((await regionmaster));
        // this.regionmasterhbRepository.save(regionmaster001hb);
        await this.courseRepository.delete(id);
    }

}
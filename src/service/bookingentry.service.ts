import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingentryDTO } from 'src/dto/Bookingentry.dto';
import { Bookingentry001hb } from 'src/entity/Bookingentry001hb';
import { Bookingentry001mb } from 'src/entity/Bookingentry001mb';
import { Doctormaster001mb } from 'src/entity/Doctormaster001mb';
import { Role001mb } from 'src/entity/Role001mb';
import { User001mb } from 'src/entity/User001mb';
import { getManager, Repository } from "typeorm";
var path = require('path');
var pdf = require("pdf-creator-node");
var path = require('path');
const excel = require('exceljs');
var fs = require("fs");


@Injectable()
export class BookingentryService {
    constructor(@InjectRepository(Role001mb) private readonly roleRepository: Repository<Role001mb>,
        @InjectRepository(User001mb) private readonly userRepository: Repository<User001mb>,
        @InjectRepository(Bookingentry001mb) private readonly bookingentryRepository: Repository<Bookingentry001mb>,
        @InjectRepository(Doctormaster001mb) private readonly doctormasterRepository: Repository<Doctormaster001mb>,
        @InjectRepository(Bookingentry001hb) private readonly bookingentryhbRepository: Repository<Bookingentry001hb>) { }

    async create(bookingentryDTO: BookingentryDTO): Promise<Bookingentry001mb> {
        // console.log("bookingentryDTO", bookingentryDTO);

        // let starttime = new Date(bookingentryDTO.time);
        // bookingentryDTO.time = starttime.getHours() + ":" + starttime.getMinutes();
        const bookingentry001mb = new Bookingentry001mb();
        bookingentry001mb.setProperties(bookingentryDTO);
        return this.bookingentryRepository.save(bookingentry001mb);
    }
    async update(bookingentryDTO: BookingentryDTO): Promise<Bookingentry001mb> {
        console.log("bookingentryDTO222222----->", bookingentryDTO);
        // const timeReg = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/
        // if (bookingentryDTO.time) {
        //     if (timeReg.test(bookingentryDTO.time) === true) {
        //         bookingentryDTO.time = bookingentryDTO.time;
        //     }
        //     else {
        //         let starttime = new Date(bookingentryDTO.time);
        //         bookingentryDTO.time = starttime.getHours() + ":" + starttime.getMinutes() + ":" + starttime.getSeconds();
        //     }
        // }
        const bookingentry001mb = new Bookingentry001mb();
        bookingentry001mb.setProperties(bookingentryDTO);
        await this.bookingentryRepository.update({ bookingId: bookingentry001mb.bookingId }, bookingentry001mb);
        return bookingentry001mb;
    }

    async findAll(username: any): Promise<Bookingentry001mb[]> {
        let bookingentry001mbs: Bookingentry001mb[] = [];
        let data = await this.userRepository.findOne({ where: { username: username } });
        // console.log('data------------>>', data);
        // let data1 = await this.roleRepository.findOne({ where: { rlid: data.personId } });
        if (data.rolename == 'Admin') {
            bookingentry001mbs = await this.bookingentryRepository.find({
                order: { bookingId: "DESC" }, relations: ['mslno2', 'dslno2']
            });
            return bookingentry001mbs;
        } else {
            bookingentry001mbs = await this.bookingentryRepository.find({
                where: { staff: username }, order: { bookingId: "DESC" }, relations: ['mslno2', 'dslno2']
            });
            return bookingentry001mbs;
        }

    }

    findOne(id: string): Promise<Bookingentry001mb> {
        return this.bookingentryRepository.findOne(id);
    }
    async remove(id: string): Promise<void> {
        let bookingentry = this.bookingentryRepository.findOne(id);
        let bookingentry001hb = new Bookingentry001hb();
        bookingentry001hb.setProperties((await bookingentry));
        this.bookingentryhbRepository.save(bookingentry001hb);
        await this.bookingentryRepository.delete(id);
    }

    async getCount(): Promise<string> {
        let result = await getManager().query(
            "select count(*) as ss from bookingentry001mb",
        );
        var string = JSON.stringify(result);
        return string;
    }
}

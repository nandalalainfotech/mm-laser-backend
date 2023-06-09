import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingentryDTO } from 'src/dto/Bookingentry.dto';
import { Bookingentry001hb } from 'src/entity/Bookingentry001hb';
import { Bookingentry001mb } from 'src/entity/Bookingentry001mb';
import { Repository } from "typeorm";
var path = require('path');
var pdf = require("pdf-creator-node");
var path = require('path');
const excel = require('exceljs');
var fs = require("fs");


@Injectable()
export class BookingentryService {
    constructor(@InjectRepository(Bookingentry001mb) private readonly bookingentryRepository: Repository<Bookingentry001mb>,
        @InjectRepository(Bookingentry001hb) private readonly bookingentryhbRepository: Repository<Bookingentry001hb>) { }

    async create(bookingentryDTO: BookingentryDTO): Promise<Bookingentry001mb> {
        console.log("bookingentryDTO---service", bookingentryDTO);
        const bookingentry001mb = new Bookingentry001mb();
        bookingentry001mb.setProperties(bookingentryDTO);
        return this.bookingentryRepository.save(bookingentry001mb);
    }

    async update(bookingentryDTO: BookingentryDTO): Promise<Bookingentry001mb> {
        const bookingentry001mb = new Bookingentry001mb();
        bookingentry001mb.setProperties(bookingentryDTO);
        await this.bookingentryRepository.update({ bookingId: bookingentry001mb.bookingId }, bookingentry001mb);
        return bookingentry001mb;
    }

    async findAll(): Promise<Bookingentry001mb[]> {
        return this.bookingentryRepository.find({ relations: ['mslno2','dslno2']});
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

}
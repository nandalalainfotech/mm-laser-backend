import { Injectable, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Response } from "express";
import * as fs from 'fs';
import * as path from 'path';
import { CaseentryDTO } from 'src/dto/Caseentry.dto';
import { Caseentry001hb } from 'src/entity/Caseentry001hb';
import { Caseentry001mb } from 'src/entity/Caseentry001mb';
import { Casemachine001wb } from 'src/entity/Casemachine001wb';
import { Doctormaster001mb } from 'src/entity/Doctormaster001mb';
import { Request } from "supertest";
import { Repository } from "typeorm";
var pdf = require("pdf-creator-node");


@Injectable()
export class CaseentryService {
    constructor(
        @InjectRepository(Caseentry001mb) private readonly caseentryRepository: Repository<Caseentry001mb>,
        @InjectRepository(Caseentry001hb) private readonly caseentryhbRepository: Repository<Caseentry001hb>,
        @InjectRepository(Casemachine001wb) private readonly casemachineRepository: Repository<Casemachine001wb>,
        @InjectRepository(Doctormaster001mb) private readonly doctormasterRepository: Repository<Doctormaster001mb>,) { }

    async create(caseentryDTO: CaseentryDTO): Promise<Caseentry001mb> {

        const id = caseentryDTO.doctorname;
        const doctorid = await this.doctormasterRepository.findOne({ where: { slNo: id } });
        const emailid = doctorid.emailid;
        // console.log("emailid------------", emailid);


        let casemachine001wbs: Casemachine001wb[] = [];
        for (let i = 0; i < caseentryDTO.Casemachine001wbs.length; i++) {
            const casemachine001wb = new Casemachine001wb();
            // casemachine001wb.cslno = caseentryDTO.caseentryId;
            casemachine001wb.mname = caseentryDTO.Casemachine001wbs[i].mname
            casemachine001wb.numofcase = caseentryDTO.Casemachine001wbs[i].numofcase
            casemachine001wb.charge = caseentryDTO.Casemachine001wbs[i].charge
            casemachine001wb.insertUser = caseentryDTO.insertUser;
            casemachine001wb.insertDatetime = caseentryDTO.insertDatetime;
            let orderitem = await this.casemachineRepository.save(
                casemachine001wb
            );
            casemachine001wbs.push(orderitem);
        }
        if (casemachine001wbs.length > 0) {
            const caseentry001mb = new Caseentry001mb();
            caseentry001mb.setProperties(caseentryDTO);
            caseentry001mb.casemachine001wbs = casemachine001wbs;
            await this.caseentryRepository.save(caseentry001mb);
            return caseentry001mb;
        } else {
            // throw new HttpException('Please Add Item Details', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async update(caseentryDTO: CaseentryDTO): Promise<Caseentry001mb> {
        let arr
        for (let i = 0; i < caseentryDTO.Casemachine001wbs.length; i++) {
            // console.log("caseentryDTO=======", caseentryDTO);

            if (caseentryDTO.Casemachine001wbs[i].slno) {
                arr = await this.casemachineRepository.find({ where: { cslno: caseentryDTO.Casemachine001wbs[i].cslno } });
            } else {
                const casemachine001wb = new Casemachine001wb();
                // console.log('casemachine001wb-------222222', casemachine001wb);
                // console.log("caseentryDTO22222=======", caseentryDTO);
                casemachine001wb.cslno = caseentryDTO.caseentryId;
                casemachine001wb.mname = caseentryDTO.Casemachine001wbs[i].mname;
                casemachine001wb.numofcase = caseentryDTO.Casemachine001wbs[i].numofcase;
                casemachine001wb.charge = caseentryDTO.Casemachine001wbs[i].charge;
                // console.log('casemachine001wb-------333333', casemachine001wb);
                casemachine001wb.insertUser = caseentryDTO.insertUser;
                casemachine001wb.insertDatetime = caseentryDTO.insertDatetime;
                await this.casemachineRepository.save(
                    casemachine001wb
                );
            }
        }

        for (let z = 0; z < arr.length; z++) {

            if (arr[z]?.slno == caseentryDTO.Casemachine001wbs[z]?.slno) {
                const casemachine001wb = new Casemachine001wb();
                casemachine001wb.mname = caseentryDTO.Casemachine001wbs[z].mname;
                casemachine001wb.numofcase = caseentryDTO.Casemachine001wbs[z].numofcase;
                casemachine001wb.charge = caseentryDTO.Casemachine001wbs[z].charge;
                casemachine001wb.updatedUser = caseentryDTO.updatedUser;
                casemachine001wb.updatedDatetime = caseentryDTO.updatedDatetime;
                await this.casemachineRepository.update({ slno: caseentryDTO.Casemachine001wbs[z].slno }, casemachine001wb);
            } else if (arr[z]?.slno !== caseentryDTO.Casemachine001wbs[z]?.slno) {
                await this.casemachineRepository.delete(arr[z])
            }
        }

        const caseentry001mb = new Caseentry001mb();
        caseentry001mb.setProperties(caseentryDTO);
        await this.caseentryRepository.update({ caseentryId: caseentry001mb.caseentryId }, caseentry001mb);
        return caseentry001mb;
    }


    async findAll(username: any): Promise<Caseentry001mb[]> {
        let caseentry001mbs: Caseentry001mb[] = [];
        caseentry001mbs = await this.caseentryRepository.find({
            where: { insertUser: username }, order: { caseentryId: "DESC" }, relations: ['doctorname2', 'appointmentNo2', "casemachine001wbs"]
        });

        return caseentry001mbs;
    }

    findOne(id: string): Promise<Caseentry001mb> {
        return this.caseentryRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        let caseentry = this.caseentryRepository.findOne(id);
        let caseentry001hb = new Caseentry001hb();
        caseentry001hb.setProperties((await caseentry));
        this.caseentryhbRepository.save(caseentry001hb);
        await this.caseentryRepository.delete(id);
    }

    async downloadPdf(id: any, @Res() response: Response) {

        let purchaslip = await this.caseentryRepository.find({
            where: { caseentryId: id },
            relations: [
                "casemachine001wbs",
                "casemachine001wbs.cslno2",
                "hospname2",
                "doctorname2",
            ],
        });

        let casemachineitems: Casemachine001wb[] = [];
        let cases = 0;
        let chargelist = 0;

        for (let i = 0; i < purchaslip.length; i++) {
            // charge.push(purchaslip[i].charge)
            for (let j = 0; j < purchaslip[i].casemachine001wbs.length; j++) {
                // console.log("purchaslip[i].casemachine001wbs", purchaslip[i].casemachine001wbs[j]);
                cases += parseInt(purchaslip[i].casemachine001wbs[j].numofcase)
                casemachineitems.push(purchaslip[i].casemachine001wbs[j]);
                chargelist += parseInt(purchaslip[i].casemachine001wbs[j].charge);

            }

        }
        let totoal = chargelist
        let totalamount
        totalamount = (cases * totoal)

        // let doctorlist = await this.doctormasterRepository.find({
        //     where: { slNo: id },
        // });

        var html = fs.readFileSync("./html_pdf/caseentry.html", "utf8");

        var document = {
            html: html,
            data: {
                cEntry: purchaslip,
                casemachine: casemachineitems,
                caselist: cases,
                charge: chargelist,
                total: totalamount,
            },
            path: path.join(`./pdf/caseentry.pdf`),
            type: "",
        };
        var options = {
            format: "A4",
            orientation: "portrait",
            border: "10mm",
        };
        if (purchaslip.length < 0) {
            return;
        }
        else {
            pdf.create(document, options).then((pathRes) => {
                const filestream = fs.createReadStream(pathRes.filename);
                response.writeHead(200, {
                    "Content-Disposition": "attachment;filename=" + "caseentry.pdf",
                    'Content-Type': 'application/pdf'
                });
                filestream.pipe(response);
            }).catch((error) => {
                console.error(error);
            });
        };

    }

}


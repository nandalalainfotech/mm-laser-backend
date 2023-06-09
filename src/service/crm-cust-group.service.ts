import { Injectable, Req, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Response } from "express";
import * as fs from 'fs';
import * as path from 'path';
import { SetupcugrpDTO } from '../dto/Setupcugrp.dto';
import { Setupcugrp001hb } from '../entity/Setupcugrp001hb';
import { Setupcugrp001mb } from '../entity/Setupcugrp001mb';
import { Request } from "supertest";
import { Repository } from 'typeorm';
var pdf = require("pdf-creator-node");
const excel = require('exceljs');


@Injectable()
export class CrmCustGroupService {
    constructor(@InjectRepository(Setupcugrp001mb) private readonly crmCustGroupRepository: Repository<Setupcugrp001mb>,
        @InjectRepository(Setupcugrp001hb) private readonly crmCustGrouphbRepository: Repository<Setupcugrp001hb>) { }

    async create(setupcugrpDTO: SetupcugrpDTO): Promise<Setupcugrp001mb> {
        const setupcugrp001mb = new Setupcugrp001mb();
        setupcugrp001mb.setProperties(setupcugrpDTO);
        return this.crmCustGroupRepository.save(setupcugrp001mb);
    }
    async update(setupcugrpDTO: SetupcugrpDTO): Promise<Setupcugrp001mb> {
        const setupcugrp001mb = new Setupcugrp001mb();
        setupcugrp001mb.setProperties(setupcugrpDTO);
        await this.crmCustGroupRepository.update({ cugrpId: setupcugrp001mb.cugrpId }, setupcugrp001mb);
        return setupcugrp001mb;
    }

    async findAll(): Promise<Setupcugrp001mb[]> {
        return this.crmCustGroupRepository.find();
    }
    findOne(id: number): Promise<Setupcugrp001mb> {
        return this.crmCustGroupRepository.findOne(id);
    }
    async remove(id: number): Promise<void> {
        let Setupcugrp = this.crmCustGroupRepository.findOne(id);
        let setupcugrp001hb = new Setupcugrp001hb();
        setupcugrp001hb.setProperties((await Setupcugrp));
        this.crmCustGrouphbRepository.save(setupcugrp001hb);
        await this.crmCustGroupRepository.delete(id);
    }

    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        var html = fs.readFileSync("./html_pdf/crmCustGroup.html", "utf8");
        let crmCustGroup: any[] = await this.crmCustGroupRepository.find();


        var document = {
            html: html,
            data: {
                CrmCustGroup: crmCustGroup,
            },
            path: path.join(`./pdf/crmCustGroup.pdf`),
            type: "",
        };
        var options = {
            format: "A3",
            orientation: "portrait",
            border: "10mm",
            header: {
                height: "45mm",
            },
            footer: {
                height: "28mm",

            }
        };
        if (crmCustGroup.length < 0) {
            return;
        }
        else {
            pdf.create(document, options).then((pathRes) => {
                const filestream = fs.createReadStream(pathRes.filename);
                response.writeHead(200, {
                    "Content-Disposition": "attachment;filename=" + "crmCustGroup.pdf",
                    'Content-Type': 'application/pdf'
                });
                filestream.pipe(response);
            }).catch((error) => {
                console.error(error);
            });
        };

    }

    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        let crmCustGroup = await this.crmCustGroupRepository.find();


        if (crmCustGroup.length < 0) {
            return;
        }
        else {

            let workbook = new excel.Workbook();
            let worksheet = workbook.addWorksheet('crmCustGroup');
            worksheet.getRow(1).height = 30;
            worksheet.getRow(2).height = 30;
            worksheet.getRow(3).height = 25;
            worksheet.getRow(4).height = 20;
            worksheet.getRow(5).height = 20;
            worksheet.getRow(6).height = 20;
            worksheet.getRow(7).height = 20;
            worksheet.getRow(8).height = 20;
            worksheet.getRow(9).height = 20;
            worksheet.getRow(10).height = 20;
            worksheet.getRow(11).height = 20;
            worksheet.getRow(12).height = 20;
            worksheet.getRow(13).height = 20;
            worksheet.getRow(14).height = 20;
            worksheet.getRow(15).height = 20;
            worksheet.getRow(16).height = 20;
            worksheet.columns = [{ key: 'A', width: 15.0 }, { key: 'B', width: 20.0 }, { key: 'C', width: 20.0 }];

            worksheet.columns.forEach((col) => {
                col.style.font = {
                    size: 10,
                    bold: true
                };
                col.style.alignment = { vertical: 'middle', horizontal: 'center' };
                col.style.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            })

            worksheet.mergeCells('A1:C1');
            worksheet.getCell('A1:C1').value = "NANDALALA ERP";
            worksheet.getCell('A1:C1').font = {
                size: 20,
                bold: true
            };
            worksheet.getCell('A1:C1').fill = {
                type: 'pattern', pattern: 'solid', fgColor:
                    { argb: 'ffffff' }, bgColor: { argb: '#7f11e0' }
            };
            worksheet.getCell('A1:C2').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A2:C2');
            worksheet.getCell('A2:C2').value = "Add New Group";
            worksheet.getCell('A2:C2').font = {
                size: 16,
                bold: true
            };
            worksheet.getCell('A2:C2').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A3');
            worksheet.getCell('A3').value = "ID";
            worksheet.getCell('A3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('A3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('B3');
            worksheet.getCell('B3').value = "Customer Group";
            worksheet.getCell('B3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('B3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('C3');
            worksheet.getCell('C3').value = "Sales Person";
            worksheet.getCell('C3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('C3').alignment = { vertical: 'middle', horizontal: 'center' };







            for (let i = 0; i < crmCustGroup.length; i++) {

                let temp = i + 4;

                worksheet.mergeCells('A' + temp);
                worksheet.getCell('A' + temp).value = crmCustGroup[i].cugrpId;
                worksheet.getCell('A' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('A' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('B' + temp);
                worksheet.getCell('B' + temp).value = crmCustGroup[i].customergroup;
                worksheet.getCell('B' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('B' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('C' + temp);
                worksheet.getCell('C' + temp).value = crmCustGroup[i].salesPerson;
                worksheet.getCell('C' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('C' + temp).alignment = { vertical: 'middle', horizontal: 'center' };



            }


            return workbook.xlsx.write(response).then(function () {
                response['status'](200).end();
            });

        }
    }
}
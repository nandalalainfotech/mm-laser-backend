import { Injectable, Req, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Response } from "express";
import * as fs from 'fs';
import * as path from 'path';
import { BomtypeDTO } from '../dto/Bomtype.dto';
import { Bomtype001hb } from '../entity/Bomtype001hb';
import { Bomtype001mb } from '../entity/Bomtype001mb';
import { Request } from "supertest";
import { Repository } from 'typeorm';
var pdf = require("pdf-creator-node");
const excel = require('exceljs');


@Injectable()
export class BomTypeService {
    constructor(@InjectRepository(Bomtype001mb) private readonly bomtypeRepository: Repository<Bomtype001mb>,
        @InjectRepository(Bomtype001hb) private readonly bomtypehbRepository: Repository<Bomtype001hb>) { }

    async create(bomtypeDTO: BomtypeDTO): Promise<Bomtype001mb> {
        const bomtype001mb = new Bomtype001mb();
        bomtype001mb.setProperties(bomtypeDTO);
        return this.bomtypeRepository.save(bomtype001mb);
    }

    async update(bomtypeDTO: BomtypeDTO): Promise<Bomtype001mb> {
        const bomtype001mb = new Bomtype001mb();
        bomtype001mb.setProperties(bomtypeDTO);
        await this.bomtypeRepository.update({ bomId: bomtype001mb.bomId }, bomtype001mb);
        return bomtype001mb;
    }

    async findAll(): Promise<Bomtype001mb[]> {
        return this.bomtypeRepository.find();
    }

    findOne(id: string): Promise<Bomtype001mb> {
        return this.bomtypeRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        let bomtype = this.bomtypeRepository.findOne(id);
        let bomtype001hb = new Bomtype001hb();
        bomtype001hb.setProperties((await bomtype));
        this.bomtypehbRepository.save(bomtype001hb);
        await this.bomtypeRepository.delete(id);
    }

    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        var html = fs.readFileSync("./html_pdf/bom-type.html", "utf8");
        let bomType: any[] = await this.bomtypeRepository.find();


        var document = {
            html: html,
            data: {
                BomType: bomType,
            },
            path: path.join(`./pdf/bomType.pdf`),
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
        if (bomType.length < 0) {
            return;
        }
        else {
            pdf.create(document, options).then((pathRes) => {
                const filestream = fs.createReadStream(pathRes.filename);
                response.writeHead(200, {
                    "Content-Disposition": "attachment;filename=" + "bomType.pdf",
                    'Content-Type': 'application/pdf'
                });
                filestream.pipe(response);
            }).catch((error) => {
                console.error(error);
            });
        };
    }

    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        let bomType = await this.bomtypeRepository.find();


        if (bomType.length < 0) {
            return;
        }
        else {

            let workbook = new excel.Workbook();
            let worksheet = workbook.addWorksheet('bomType');
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
            worksheet.columns = [{ key: 'A', width: 15.0 }, { key: 'B', width: 30.0 }, { key: 'C', width: 30.0 }
            ];

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
            worksheet.getCell('A1:C1').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A2:C2');
            worksheet.getCell('A2:C2').value = "BOM Type";
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
            worksheet.getCell('B3').value = "BOM Name";
            worksheet.getCell('B3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('B3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('C3');
            worksheet.getCell('C3').value = "Type";
            worksheet.getCell('C3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('C3').alignment = { vertical: 'middle', horizontal: 'center' };


            for (let i = 0; i < bomType.length; i++) {

                let temp = i + 4;

                worksheet.mergeCells('A' + temp);
                worksheet.getCell('A' + temp).value = bomType[i].bomId;
                worksheet.getCell('A' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('A' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('B' + temp);
                worksheet.getCell('B' + temp).value = bomType[i].bomName;
                worksheet.getCell('B' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('B' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('C' + temp);
                worksheet.getCell('C' + temp).value = bomType[i].bomType;
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

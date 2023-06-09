import { Injectable, Req, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Response } from "express";
import * as fs from 'fs';
import * as path from 'path';
import { ProdbundleDTO } from "../dto/Prodbundle.dto";
import { Prodbundle001hb } from "../entity/Prodbundle001hb";
import { Prodbundle001mb } from "../entity/Prodbundle001mb";
import { Request } from "supertest";
import { Repository } from "typeorm";
var pdf = require("pdf-creator-node");
const excel = require('exceljs');


@Injectable()
export class ProdBundleService {
    constructor(@InjectRepository(Prodbundle001hb) private readonly prodbundlehbRepository: Repository<Prodbundle001hb>,
                @InjectRepository(Prodbundle001mb) private readonly prodbundleRepository: Repository<Prodbundle001mb>,) { }

    async create(prodbundleDTO: ProdbundleDTO): Promise<Prodbundle001mb> {
        const prodbundle001mb = new Prodbundle001mb();
        prodbundle001mb.setProperties(prodbundleDTO);
        return this.prodbundleRepository.save(prodbundle001mb);
    }

    async update(prodbundleDTO: ProdbundleDTO): Promise<Prodbundle001mb> {
        const prodbundle001mb = new Prodbundle001mb();
        prodbundle001mb.setProperties(prodbundleDTO);
        await this.prodbundleRepository.update({ pbundId: prodbundle001mb.pbundId }, prodbundle001mb);
        return prodbundle001mb;
    }

    async findAll(): Promise<Prodbundle001mb[]> {
        return this.prodbundleRepository.find();
    }

    findOne(id: string): Promise<Prodbundle001mb> {
        return this.prodbundleRepository.findOne(id);
    }

    async remove(id: number): Promise<void> {
        let prodbundle = this.prodbundleRepository.findOne(id);
        let prodbundle001hb = new Prodbundle001hb();
        prodbundle001hb.setProperties((await prodbundle));
        this.prodbundlehbRepository.save(prodbundle001hb);
        await this.prodbundleRepository.delete(id);
    }

    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        var html = fs.readFileSync("./html_pdf/prod-bundle.html", "utf8");
        let prodbundle: any[] = await this.prodbundleRepository.find();


        var document = {
            html: html,
            data: {
                Prodbundle: prodbundle,
            },
            path: path.join(`./pdf/prodbundle.pdf`),
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
        if (prodbundle.length < 0) {
            return;
        }
        else {
            pdf.create(document, options).then((pathRes) => {
                const filestream = fs.createReadStream(pathRes.filename);
                response.writeHead(200, {
                    "Content-Disposition": "attachment;filename=" + "prodbundle.pdf",
                    'Content-Type': 'application/pdf'
                });
                filestream.pipe(response);
            }).catch((error) => {
                console.error(error);
            });
        };

    }

    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        let prodbundle = await this.prodbundleRepository.find();
        
        if (prodbundle.length < 0) {
            return;
        }
        else {

            let workbook = new excel.Workbook();
            let worksheet = workbook.addWorksheet('prodbundle');
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
            worksheet.columns = [{ key: 'A', width: 15.0 }, { key: 'B', width: 20.0 }, { key: 'C', width: 20.0 },
            { key: 'D', width: 20.0 }, { key: 'E', width: 20.0 }];

            worksheet.columns.forEach((col) => {
                col.style.font = {
                    size: 10,
                    bold: true
                };
                col.style.alignment = { vertical: 'middle', horizontal: 'center' };
                col.style.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            })

            worksheet.mergeCells('A1:E1');
            worksheet.getCell('A1:E1').value = "NANDALALA ERP";
            worksheet.getCell('A1:E1').font = {
                size: 20,
                bold: true
            };
            worksheet.getCell('A1:E1').fill = {
                type: 'pattern', pattern: 'solid', fgColor:
                    { argb: 'ffffff' }, bgColor: { argb: '#7f11e0' }
            };
            worksheet.getCell('A1:E1').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A2:E2');
            worksheet.getCell('A2:E2').value = "Product Bundle";
            worksheet.getCell('A2:E2').font = {
                size: 16,
                bold: true
            };
            worksheet.getCell('A2:E2').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A3');
            worksheet.getCell('A3').value = "ID";
            worksheet.getCell('A3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('A3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('B3');
            worksheet.getCell('B3').value = "Item";
            worksheet.getCell('B3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('B3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('C3');
            worksheet.getCell('C3').value = "Child Item";
            worksheet.getCell('C3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('C3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('D3');
            worksheet.getCell('D3').value = "Quantity";
            worksheet.getCell('D3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('D3').alignment = { vertical: 'middle', horizontal: 'center' };


            worksheet.mergeCells('E3');
            worksheet.getCell('E3').value = "Description";
            worksheet.getCell('E3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('E3').alignment = { vertical: 'middle', horizontal: 'center' };


            for (let i = 0; i < prodbundle.length; i++) {

                let temp = i + 4;
                
                worksheet.mergeCells('A' + temp);
                worksheet.getCell('A' + temp).value = prodbundle[i].pbundId;
                worksheet.getCell('A' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('A' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('B' + temp);
                worksheet.getCell('B' + temp).value = prodbundle[i].itemCode;
                worksheet.getCell('B' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('B' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('C' + temp);
                worksheet.getCell('C' + temp).value = prodbundle[i].childItem;
                worksheet.getCell('C' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('C' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('D' + temp);
                worksheet.getCell('D' + temp).value = prodbundle[i].quantity;
                worksheet.getCell('D' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('D' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('E' + temp);
                worksheet.getCell('E' + temp).value = prodbundle[i].description;
                worksheet.getCell('E' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('E' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

               }


            return workbook.xlsx.write(response).then(function () {
                response['status'](200).end();
            });

        }
    }

}

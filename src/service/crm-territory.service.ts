import { Injectable, Req, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Response } from "express";
import * as fs from 'fs';
import * as path from 'path';
import { TerritoryDTO } from '../dto/Territory.dto';
import { Territory001hb } from '../entity/Territory001hb';
import { Territory001mb } from '../entity/Territory001mb';
import { Request } from "supertest";
import { Repository } from 'typeorm';
var pdf = require("pdf-creator-node");
const excel = require('exceljs');



@Injectable()
export class CrmTerritoryService {
    constructor(@InjectRepository(Territory001mb) private readonly crmTerritoryRepository: Repository<Territory001mb>,
        @InjectRepository(Territory001hb) private readonly crmTerritoryhbRepository: Repository<Territory001hb>) { }

    async create(territoryDTO: TerritoryDTO): Promise<Territory001mb> {
        const territory001mb = new Territory001mb();
        territory001mb.setProperties(territoryDTO);
        return this.crmTerritoryRepository.save(territory001mb);
    }
    async update(territoryDTO: TerritoryDTO): Promise<Territory001mb> {
        const territory001mb = new Territory001mb();
        territory001mb.setProperties(territoryDTO);
        await this.crmTerritoryRepository.update({ terId: territory001mb.terId }, territory001mb);
        return territory001mb;
    }

    async findAll(): Promise<Territory001mb[]> {
        return this.crmTerritoryRepository.find();
    }
    findOne(id: number): Promise<Territory001mb> {
        return this.crmTerritoryRepository.findOne(id);
    }
    async remove(id: number): Promise<void> {
        let Territory = this.crmTerritoryRepository.findOne(id);
        let territory001hb = new Territory001hb();
        territory001hb.setProperties((await Territory));
        this.crmTerritoryhbRepository.save(territory001hb);
        await this.crmTerritoryRepository.delete(id);
    }

    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        var html = fs.readFileSync("./html_pdf/crmTerritory.html", "utf8");
        let crmTerritory: any[] = await this.crmTerritoryRepository.find();


        var document = {
            html: html,
            data: {
                CrmTerritory: crmTerritory,
            },
            path: path.join(`./pdf/crmTerritory.pdf`),
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
        if (crmTerritory.length < 0) {
            return;
        }
        else {
            pdf.create(document, options).then((pathRes) => {
                const filestream = fs.createReadStream(pathRes.filename);
                response.writeHead(200, {
                    "Content-Disposition": "attachment;filename=" + "crmTerritory.pdf",
                    'Content-Type': 'application/pdf'
                });
                filestream.pipe(response);
            }).catch((error) => {
                console.error(error);
            });
        };

    }

    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        let crmTerritory = await this.crmTerritoryRepository.find();


        if (crmTerritory.length < 0) {
            return;
        }
        else {

            let workbook = new excel.Workbook();
            let worksheet = workbook.addWorksheet('crmTerritory');
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
            worksheet.columns = [{ key: 'A', width: 15.0 }, { key: 'B', width: 20.0 }];

            worksheet.columns.forEach((col) => {
                col.style.font = {
                    size: 10,
                    bold: true
                };
                col.style.alignment = { vertical: 'middle', horizontal: 'center' };
                col.style.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            })

            worksheet.mergeCells('A1:B1');
            worksheet.getCell('A1:B1').value = "NANDALALA ERP";
            worksheet.getCell('A1:B1').font = {
                size: 20,
                bold: true
            };
            worksheet.getCell('A1:B1').fill = {
                type: 'pattern', pattern: 'solid', fgColor:
                    { argb: 'ffffff' }, bgColor: { argb: '#7f11e0' }
            };
            worksheet.getCell('A1:B1').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A2:B2');
            worksheet.getCell('A2:B2').value = "Add New Territory";
            worksheet.getCell('A2:B2').font = {
                size: 16,
                bold: true
            };
            worksheet.getCell('A2:B2').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A3');
            worksheet.getCell('A3').value = "ID";
            worksheet.getCell('A3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('A3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('B3');
            worksheet.getCell('B3').value = "Territory Name";
            worksheet.getCell('B3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('B3').alignment = { vertical: 'middle', horizontal: 'center' };







            for (let i = 0; i < crmTerritory.length; i++) {

                let temp = i + 4;

                worksheet.mergeCells('A' + temp);
                worksheet.getCell('A' + temp).value = crmTerritory[i].terId;
                worksheet.getCell('A' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('A' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('B' + temp);
                worksheet.getCell('B' + temp).value = crmTerritory[i].terName;
                worksheet.getCell('B' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('B' + temp).alignment = { vertical: 'middle', horizontal: 'center' };




            }


            return workbook.xlsx.write(response).then(function () {
                response['status'](200).end();
            });

        }
    }
}
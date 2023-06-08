import { Injectable, Req, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Response } from "express";
import * as fs from 'fs';
import * as path from 'path';
import { StktranspurecptDTO } from "../dto/Stktranspurecpt.dto";
import { Stktranspurecpt001hb } from "../entity/Stktranspurecpt001hb";
import { Stktranspurecpt001mb } from "../entity/Stktranspurecpt001mb";
import { Request } from "supertest";
import { Repository } from "typeorm";
var pdf = require("pdf-creator-node");
const excel = require('exceljs');


@Injectable()

export class PurchaseReceiptService {

    constructor (@InjectRepository(Stktranspurecpt001hb) private readonly purchasehbRepository: Repository<Stktranspurecpt001hb>,
                 @InjectRepository(Stktranspurecpt001mb) private readonly purchaseRepository: Repository<Stktranspurecpt001mb>) {}

    async create(stktranspurecptDTO: StktranspurecptDTO): Promise<Stktranspurecpt001mb> {
        const  stktranspurecpt001mb = new Stktranspurecpt001mb();
        stktranspurecpt001mb.setProperties(stktranspurecptDTO);
        return this.purchaseRepository.save(stktranspurecpt001mb);
    }

    async update(stktranspurecptDTO: StktranspurecptDTO): Promise<Stktranspurecpt001mb> {
        const stktranspurecpt001mb = new Stktranspurecpt001mb();
        stktranspurecpt001mb.setProperties(stktranspurecptDTO);
        await this.purchasehbRepository.update({stpurtId: stktranspurecpt001mb.stpurtId}, stktranspurecpt001mb);
        return stktranspurecpt001mb;
    }

    async findAll(): Promise<Stktranspurecpt001mb[]> {
        return this.purchaseRepository.find();
    }

    findOne(id: string): Promise<Stktranspurecpt001mb> {
        return this.purchaseRepository.findOne(id);
    }

    async remove(id: number): Promise<void> {
        let  stktranspurecpt = this.purchaseRepository.findOne(id);
        let  stktranspurecpt001hb = new Stktranspurecpt001hb();
        stktranspurecpt001hb.setProperties((await  stktranspurecpt));
        this.purchasehbRepository.save(stktranspurecpt001hb);
        await this.purchaseRepository.delete(id);
    }

    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        var html = fs.readFileSync("./html_pdf/purchase.html", "utf8");
        let purchase: any[] = await this.purchaseRepository.find();


        var document = {
            html: html,
            data: {
                Purchase: purchase,
            },
            path: path.join(`./pdf/purchase.pdf`),
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
        if (purchase.length < 0) {
            return;
        }
        else {
            pdf.create(document, options).then((pathRes) => {
                const filestream = fs.createReadStream(pathRes.filename);
                response.writeHead(200, {
                    "Content-Disposition": "attachment;filename=" + "purchase.pdf",
                    'Content-Type': 'application/pdf'
                });
                filestream.pipe(response);
            }).catch((error) => {
                console.error(error);
            });
        };

    }

    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        let purchase = await this.purchaseRepository.find();
       

        if (purchase.length < 0) {
            return;
        }
        else {

            let workbook = new excel.Workbook();
            let worksheet = workbook.addWorksheet('purchase');
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
            worksheet.getCell('A2:E2').value = "Add New Purchase Receipt";
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
            worksheet.getCell('B3').value = "Title";
            worksheet.getCell('B3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('B3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('C3');
            worksheet.getCell('C3').value = "Status";
            worksheet.getCell('C3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('C3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('D3');
            worksheet.getCell('D3').value = "Grand Total";
            worksheet.getCell('D3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('D3').alignment = { vertical: 'middle', horizontal: 'center' };


            worksheet.mergeCells('E3');
            worksheet.getCell('E3').value = "Purchase Receipt";
            worksheet.getCell('E3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('E3').alignment = { vertical: 'middle', horizontal: 'center' };

           

            


           

            for (let i = 0; i < purchase.length; i++) {

                let temp = i + 4;
                
                worksheet.mergeCells('A' + temp);
                worksheet.getCell('A' + temp).value = purchase[i].stpurtId;
                worksheet.getCell('A' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('A' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('B' + temp);
                worksheet.getCell('B' + temp).value = purchase[i].title;
                worksheet.getCell('B' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('B' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('C' + temp);
                worksheet.getCell('C' + temp).value = purchase[i].status;
                worksheet.getCell('C' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('C' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('D' + temp);
                worksheet.getCell('D' + temp).value = purchase[i].grandTotal;
                worksheet.getCell('D' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('D' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('E' + temp);
                worksheet.getCell('E' + temp).value = purchase[i].purtName;
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
import { Injectable, Req, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Response } from "express";
import * as fs from 'fs';
import * as path from 'path';
import { PeriodclosingvoucherDTO } from '../dto/Periodclosingvoucher.dto';
import { Periodclosingvoucher001hb } from '../entity/Periodclosingvoucher001hb';
import { Periodclosingvoucher001mb } from '../entity/Periodclosingvoucher001mb';
import { Request } from "supertest";
import { Repository } from 'typeorm';
var pdf = require("pdf-creator-node");
const excel = require('exceljs');


@Injectable()
export class PeriodclosingVoucherService {
    constructor(@InjectRepository(Periodclosingvoucher001hb) private readonly periodclosingVoucherhbRepository: Repository<Periodclosingvoucher001hb>,
                @InjectRepository(Periodclosingvoucher001mb) private readonly periodclosingVoucherRepository: Repository<Periodclosingvoucher001mb>) { }

    async create(periodclosingvoucherDTO: PeriodclosingvoucherDTO): Promise<Periodclosingvoucher001mb> {
        const periodclosingvoucher001mb = new Periodclosingvoucher001mb();
        periodclosingvoucher001mb.setProperties(periodclosingvoucherDTO);
        return this.periodclosingVoucherRepository.save(periodclosingvoucher001mb);
    }

    async update(periodclosingvoucherDTO: PeriodclosingvoucherDTO): Promise<Periodclosingvoucher001mb> {
        const periodclosingvoucher001mb = new Periodclosingvoucher001mb();
        periodclosingvoucher001mb.setProperties(periodclosingvoucherDTO);
        await this.periodclosingVoucherRepository.update({ id: periodclosingvoucher001mb.id }, periodclosingvoucher001mb);
        return periodclosingvoucher001mb;
    }

    async findAll(): Promise<Periodclosingvoucher001mb[]> {
        return this.periodclosingVoucherRepository.find();
    }

    findOne(id: string): Promise<Periodclosingvoucher001mb> {
        return this.periodclosingVoucherRepository.findOne(id);
    }

    async remove(id: number): Promise<void> {
        let periodclosingvoucher = this.periodclosingVoucherRepository.findOne(id);
        let periodclosingvoucher001hb = new Periodclosingvoucher001hb();
        periodclosingvoucher001hb.setProperties((await periodclosingvoucher));
        this.periodclosingVoucherhbRepository.save(periodclosingvoucher001hb);
        await this.periodclosingVoucherRepository.delete(id);
    }

    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        var html = fs.readFileSync("./html_pdf/periodclosingVoucher.html", "utf8");
        let periodclosingVoucher: any[] = await this.periodclosingVoucherRepository.find();


        var document = {
            html: html,
            data: {
                PeriodclosingVoucher: periodclosingVoucher,
            },
            path: path.join(`./pdf/periodclosingVoucher.pdf`),
            type: "",
        };
        var options = {
            format: "A3",
            orientation: "landscape",
            border: "10mm",
            header: {
                height: "45mm",
            },
            footer: {
                height: "28mm",

            }
        };
        if (periodclosingVoucher.length < 0) {
            return;
        }
        else {
            pdf.create(document, options).then((pathRes) => {
                const filestream = fs.createReadStream(pathRes.filename);
                response.writeHead(200, {
                    "Content-Disposition": "attachment;filename=" + "periodclosingVoucher.pdf",
                    'Content-Type': 'application/pdf'
                });
                filestream.pipe(response);
            }).catch((error) => {
                console.error(error);
            });
        };

    }

    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        let periodclosingVoucher = await this.periodclosingVoucherRepository.find();
       

        if (periodclosingVoucher.length < 0) {
            return;
        }
        else {

            let workbook = new excel.Workbook();
            let worksheet = workbook.addWorksheet('periodclosingVoucher');
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
            worksheet.columns = [{ key: 'A', width: 15.0 }, { key: 'B', width: 20.0 }, { key: 'C', width: 30.0 },
            { key: 'D', width: 20.0 }, { key: 'E', width: 20.0 }, { key: 'F', width: 20.0 }, { key: 'G', width: 20.0 }];

            worksheet.columns.forEach((col) => {
                col.style.font = {
                    size: 10,
                    bold: true
                };
                col.style.alignment = { vertical: 'middle', horizontal: 'center' };
                col.style.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            })

            worksheet.mergeCells('A1:G1');
            worksheet.getCell('A1:G1').value = "NANDALALA ERP";
            worksheet.getCell('A1:G1').font = {
                size: 20,
                bold: true
            };
            worksheet.getCell('A1:G1').fill = {
                type: 'pattern', pattern: 'solid', fgColor:
                    { argb: 'ffffff' }, bgColor: { argb: '#7f11e0' }
            };
            worksheet.getCell('A1:G1').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A2:G2');
            worksheet.getCell('A2:G2').value = "Period Closing Voucher";
            worksheet.getCell('A2:G2').font = {
                size: 16,
                bold: true
            };
            worksheet.getCell('A2:G2').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('A3');
            worksheet.getCell('A3').value = "ID";
            worksheet.getCell('A3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('A3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('B3');
            worksheet.getCell('B3').value = "Transaction Date";
            worksheet.getCell('B3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('B3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('C3');
            worksheet.getCell('C3').value = "Closing Account Head";
            worksheet.getCell('C3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('C3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('D3');
            worksheet.getCell('D3').value = "Posting Date";
            worksheet.getCell('D3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('D3').alignment = { vertical: 'middle', horizontal: 'center' };


            worksheet.mergeCells('E3');
            worksheet.getCell('E3').value = "Closing Fiscal Year";
            worksheet.getCell('E3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('E3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('F3');
            worksheet.getCell('F3').value = "Company";
            worksheet.getCell('F3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('F3').alignment = { vertical: 'middle', horizontal: 'center' };

            worksheet.mergeCells('G3');
            worksheet.getCell('G3').value = "Remarks";
            worksheet.getCell('G3').font = {
                size: 12,
                bold: true
            };
            worksheet.getCell('G3').alignment = { vertical: 'middle', horizontal: 'center' };

           

            for (let i = 0; i < periodclosingVoucher.length; i++) {

                let temp = i + 4;
                
                worksheet.mergeCells('A' + temp);
                worksheet.getCell('A' + temp).value = periodclosingVoucher[i].id;
                worksheet.getCell('A' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('A' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('B' + temp);
                worksheet.getCell('B' + temp).value = periodclosingVoucher[i].transactiondate;
                worksheet.getCell('B' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('B' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('C' + temp);
                worksheet.getCell('C' + temp).value = periodclosingVoucher[i].closingaccounthead;
                worksheet.getCell('C' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('C' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('D' + temp);
                worksheet.getCell('D' + temp).value = periodclosingVoucher[i].postingdate;
                worksheet.getCell('D' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('D' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('E' + temp);
                worksheet.getCell('E' + temp).value = periodclosingVoucher[i].closingfiscalyear;
                worksheet.getCell('E' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('E' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('F' + temp);
                worksheet.getCell('F' + temp).value = periodclosingVoucher[i].company;
                worksheet.getCell('F' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('F' + temp).alignment = { vertical: 'middle', horizontal: 'center' };

                worksheet.mergeCells('G' + temp);
                worksheet.getCell('G' + temp).value = periodclosingVoucher[i].remarks;
                worksheet.getCell('G' + temp).font = {
                    size: 11,
                    bold: true
                };
                worksheet.getCell('G' + temp).alignment = { vertical: 'middle', horizontal: 'center' };



            }


            return workbook.xlsx.write(response).then(function () {
                response['status'](200).end();
            });

        }
    }

}

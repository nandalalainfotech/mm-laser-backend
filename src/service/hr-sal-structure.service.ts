import { Injectable, Req, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Response } from "express";
import * as fs from "fs";
import * as path from "path";
import { SalarystructureDTO } from "../dto/Salarystructure.dto";
import { Salarystructure001hb } from "../entity/Salarystructure001hb";
import { Salarystructure001mb } from "../entity/Salarystructure001mb";
import { Request } from "supertest";
import { Repository } from "typeorm";
var pdf = require("pdf-creator-node");
const excel = require("exceljs");
var html = fs.readFileSync("./html_pdf/salstructure.html", "utf8");

@Injectable()
export class HrSalaryStructureService {
  constructor(
    @InjectRepository(Salarystructure001mb)
    private readonly salstructureRepository: Repository<Salarystructure001mb>,
    @InjectRepository(Salarystructure001hb)
    private readonly salstructurehbRepository: Repository<Salarystructure001hb>
  ) {}

  async create(
    salarystructureDTO: SalarystructureDTO
  ): Promise<Salarystructure001mb> {
    const salarystructure001mb = new Salarystructure001mb();
    salarystructure001mb.setProperties(salarystructureDTO);
    return this.salstructureRepository.save(salarystructure001mb);
  }

  async update(
    salarystructureDTO: SalarystructureDTO
  ): Promise<Salarystructure001mb> {
    const salarystructure001mb = new Salarystructure001mb();
    salarystructure001mb.setProperties(salarystructureDTO);
    await this.salstructureRepository.update(
      { strId: salarystructure001mb.strId },
      salarystructure001mb
    );
    return salarystructure001mb;
  }

  async findAll(): Promise<Salarystructure001mb[]> {
    return this.salstructureRepository.find();
  }

  findOne(id: string): Promise<Salarystructure001mb> {
    return this.salstructureRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    let Salarystructure = this.salstructureRepository.findOne(id);
    let salarystructure001hb = new Salarystructure001hb();
    salarystructure001hb.setProperties(await Salarystructure);
    this.salstructurehbRepository.save(salarystructure001hb);
    await this.salstructureRepository.delete(id);
  }
  async downloadPdf(@Req() request: Request, @Res() response: Response) {
    var html = fs.readFileSync("./html_pdf/salstructure.html", "utf8");
    let salstructure: any[] = await this.salstructureRepository.find();

    var document = {
      html: html,
      data: {
        Salstructure: salstructure,
      },
      path: path.join(`./pdf/salstructure.pdf`),
      type: "",
    };
    var options = {
      format: "A3",
      orientation: "potrait",
      border: "10mm",
      header: {
        height: "45mm",
      },
      footer: {
        height: "28mm",
      },
    };
    if (salstructure.length < 0) {
      return;
    } else {
      pdf
        .create(document, options)
        .then((pathRes) => {
          const filestream = fs.createReadStream(pathRes.filename);
          response.writeHead(200, {
            "Content-Disposition": "attachment;filename=" + "salstructure.pdf",
            "Content-Type": "application/pdf",
          });
          filestream.pipe(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  async downloadExcel(@Req() request: Request, @Res() response: Response) {
    let salstructure = await this.salstructureRepository.find();

    if (salstructure.length < 0) {
      return;
    } else {
      let workbook = new excel.Workbook();
      let worksheet = workbook.addWorksheet("salstructure");
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
      worksheet.columns = [
        { key: "A", width: 15.0 },
        { key: "B", width: 20.0 },
        { key: "C", width: 20.0 },
        { key: "D", width: 20.0 },
      ];

      worksheet.columns.forEach((col) => {
        col.style.font = {
          size: 10,
          bold: true,
        };
        col.style.alignment = { vertical: "middle", horizontal: "center" };
        col.style.border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" },
        };
      });

      worksheet.mergeCells("A1:D1");
      worksheet.getCell("A1:D1").value = "NANDALALA ERP";
      worksheet.getCell("A1:D1").font = {
        size: 20,
        bold: true,
      };
      worksheet.getCell("A1:D1").fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "ffffff" },
        bgColor: { argb: "#7f11e0" },
      };
      worksheet.getCell("A1:D1").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("A2:D2");
      worksheet.getCell("A2:D2").value = "Salary Structure";
      worksheet.getCell("A2:D2").font = {
        size: 16,
        bold: true,
      };
      worksheet.getCell("A2:D2").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("A3");
      worksheet.getCell("A3").value = "ID";
      worksheet.getCell("A3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("A3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("B3");
      worksheet.getCell("B3").value = "Employee";
      worksheet.getCell("B3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("B3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("C3");
      worksheet.getCell("C3").value = "Salary Mode";
      worksheet.getCell("C3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("C3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };
      worksheet.mergeCells("D3");
      worksheet.getCell("D3").value = "From Date";
      worksheet.getCell("D3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("D3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      for (let i = 0; i < salstructure.length; i++) {
        let temp = i + 4;

        worksheet.mergeCells("A" + temp);
        worksheet.getCell("A" + temp).value = salstructure[i].strId;
        worksheet.getCell("A" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("A" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("B" + temp);
        worksheet.getCell("B" + temp).value = salstructure[i].empName;
        worksheet.getCell("B" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("B" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("C" + temp);
        worksheet.getCell("C" + temp).value = salstructure[i].isActive;
        worksheet.getCell("C" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("C" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("D" + temp);
        worksheet.getCell("D" + temp).value = salstructure[i].fromDate;
        worksheet.getCell("D" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("D" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };
      }

      return workbook.xlsx.write(response).then(function () {
        response["status"](200).end();
      });
    }
  }
}

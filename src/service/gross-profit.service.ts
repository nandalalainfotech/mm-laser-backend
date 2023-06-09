import { Injectable, Req, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Response } from "express";
import * as fs from "fs";
import * as path from "path";
import { GrossprofitDTO } from "../dto/Grossprofit.dto";
import { Grossprofit001hb } from "../entity/Grossprofit001hb";
import { Grossprofit001mb } from "../entity/Grossprofit001mb";
import { Request } from "supertest";
import { Repository } from "typeorm";
var pdf = require("pdf-creator-node");
const excel = require("exceljs");

@Injectable()
export class GrossProfitService {
  constructor(
    @InjectRepository(Grossprofit001mb)
    private readonly grossProfitRepository: Repository<Grossprofit001mb>,
    @InjectRepository(Grossprofit001hb)
    private readonly grossProfithbRepository: Repository<Grossprofit001hb>
  ) {}

  async create(grossprofitDTO: GrossprofitDTO): Promise<Grossprofit001mb> {
    const grossprofit001mb = new Grossprofit001mb();
    grossprofit001mb.setProperties(grossprofitDTO);
    return this.grossProfitRepository.save(grossprofit001mb);
  }

  async update(grossprofitDTO: GrossprofitDTO): Promise<Grossprofit001mb> {
    const grossprofit001mb = new Grossprofit001mb();
    grossprofit001mb.setProperties(grossprofitDTO);
    await this.grossProfitRepository.update(
      { id: grossprofit001mb.id },
      grossprofit001mb
    );
    return grossprofit001mb;
  }

  async findAll(): Promise<Grossprofit001mb[]> {
    return this.grossProfitRepository.find();
  }

  findOne(id: number): Promise<Grossprofit001mb> {
    return this.grossProfitRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    let grossProfit = this.grossProfitRepository.findOne(id);
    let grossprofit001hb = new Grossprofit001hb();
    grossprofit001hb.setProperties(await grossProfit);
    this.grossProfithbRepository.save(grossprofit001hb);
    await this.grossProfitRepository.delete(id);
  }

  async downloadPdf(@Req() request: Request, @Res() response: Response) {
    var html = fs.readFileSync("./html_pdf/grossProfit.html", "utf8");
    let grossProfit: any[] = await this.grossProfitRepository.find();

    var document = {
      html: html,
      data: {
        GrossProfit: grossProfit,
      },
      path: path.join(`./pdf/grossProfit.pdf`),
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
      },
    };
    if (grossProfit.length < 0) {
      return;
    } else {
      pdf
        .create(document, options)
        .then((pathRes) => {
          const filestream = fs.createReadStream(pathRes.filename);
          response.writeHead(200, {
            "Content-Disposition": "attachment;filename=" + "grossProfit.pdf",
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
    let grossProfit = await this.grossProfitRepository.find();

    if (grossProfit.length < 0) {
      return;
    } else {
      let workbook = new excel.Workbook();
      let worksheet = workbook.addWorksheet("grossProfit");
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
        { key: "E", width: 20.0 },
        { key: "F", width: 20.0 },
        { key: "G", width: 20.0 },
        { key: "H", width: 20.0 },
        { key: "I", width: 20.0 },
        { key: "J", width: 20.0 },
        { key: "K", width: 30.0 },
        { key: "L", width: 30.0 },
        { key: "M", width: 20.0 },
        { key: "N", width: 20.0 },
        { key: "O", width: 20.0 },
        { key: "P", width: 20.0 },
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

      worksheet.mergeCells("A1:P1");
      worksheet.getCell("A1:P1").value = "NANDALALA ERP";
      worksheet.getCell("A1:P1").font = {
        size: 20,
        bold: true,
      };
      worksheet.getCell("A1:P1").fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "ffffff" },
        bgColor: { argb: "#7f11e0" },
      };
      worksheet.getCell("A1:P1").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("A2:P2");
      worksheet.getCell("A2:P2").value = "Gross Profit";
      worksheet.getCell("A2:P2").font = {
        size: 16,
        bold: true,
      };
      worksheet.getCell("A2:P2").alignment = {
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
      worksheet.getCell("B3").value = "Sales Invoice";
      worksheet.getCell("B3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("B3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("C3");
      worksheet.getCell("C3").value = "Posting Date";
      worksheet.getCell("C3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("C3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("D3");
      worksheet.getCell("D3").value = "Customer";
      worksheet.getCell("D3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("D3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("E3");
      worksheet.getCell("E3").value = "Item List";
      worksheet.getCell("E3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("E3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("F3");
      worksheet.getCell("F3").value = "Quantity";
      worksheet.getCell("F3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("F3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("G3");
      worksheet.getCell("G3").value = "Warehouse";
      worksheet.getCell("G3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("G3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("H3");
      worksheet.getCell("H3").value = "Project";
      worksheet.getCell("H3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("H3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("I3");
      worksheet.getCell("I3").value = "Currency";
      worksheet.getCell("I3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("I3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("J3");
      worksheet.getCell("J3").value = "Quantity";
      worksheet.getCell("J3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("J3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("K3");
      worksheet.getCell("K3").value = "Average Selling Rate";
      worksheet.getCell("K3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("K3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("L3");
      worksheet.getCell("L3").value = "Average Buying Rate";
      worksheet.getCell("L3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("L3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("M3");
      worksheet.getCell("M3").value = "Selling Amount";
      worksheet.getCell("M3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("M3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("N3");
      worksheet.getCell("N3").value = "Buying Amount";
      worksheet.getCell("N3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("N3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("O3");
      worksheet.getCell("O3").value = "Gross Profit";
      worksheet.getCell("O3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("O3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("P3");
      worksheet.getCell("P3").value = "Gross Profit %";
      worksheet.getCell("P3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("P3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      for (let i = 0; i < grossProfit.length; i++) {
        let temp = i + 4;

        worksheet.mergeCells("A" + temp);
        worksheet.getCell("A" + temp).value = grossProfit[i].id;
        worksheet.getCell("A" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("A" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("B" + temp);
        worksheet.getCell("B" + temp).value = grossProfit[i].salesinvoice;
        worksheet.getCell("B" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("B" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("C" + temp);
        worksheet.getCell("C" + temp).value = grossProfit[i].postingdate;
        worksheet.getCell("C" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("C" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("D" + temp);
        worksheet.getCell("D" + temp).value = grossProfit[i].customer;
        worksheet.getCell("D" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("D" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("E" + temp);
        worksheet.getCell("E" + temp).value = grossProfit[i].itemname;
        worksheet.getCell("E" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("E" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("F" + temp);
        worksheet.getCell("F" + temp).value = grossProfit[i].quantity;
        worksheet.getCell("F" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("F" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("G" + temp);
        worksheet.getCell("G" + temp).value = grossProfit[i].warehouse;
        worksheet.getCell("G" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("G" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("H" + temp);
        worksheet.getCell("H" + temp).value = grossProfit[i].project;
        worksheet.getCell("H" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("H" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("I" + temp);
        worksheet.getCell("I" + temp).value = grossProfit[i].currency;
        worksheet.getCell("I" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("I" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("J" + temp);
        worksheet.getCell("J" + temp).value = grossProfit[i].quantity;
        worksheet.getCell("J" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("J" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("K" + temp);
        worksheet.getCell("K" + temp).value = grossProfit[i].averagesellingrate;
        worksheet.getCell("K" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("K" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("L" + temp);
        worksheet.getCell("L" + temp).value = grossProfit[i].averagebuyingrate;
        worksheet.getCell("L" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("L" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("M" + temp);
        worksheet.getCell("M" + temp).value = grossProfit[i].sellingamount;
        worksheet.getCell("M" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("M" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("N" + temp);
        worksheet.getCell("N" + temp).value = grossProfit[i].buyingamount;
        worksheet.getCell("N" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("N" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("O" + temp);
        worksheet.getCell("O" + temp).value = grossProfit[i].grossprofit;
        worksheet.getCell("O" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("O" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("P" + temp);
        worksheet.getCell("P" + temp).value = grossProfit[i].grosspercentage;
        worksheet.getCell("P" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("P" + temp).alignment = {
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

import { Injectable, Req, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Response } from "express";
import * as fs from "fs";
import * as path from "path";
import { ReqitemorderDTO } from "../dto/Reqitemorder.dto";
import { Reqitemorder001hb } from "../entity/Reqitemorder001hb";
import { Reqitemorder001mb } from "../entity/Reqitemorder001mb";
import { Request } from "supertest";
import { Repository } from "typeorm";
var pdf = require("pdf-creator-node");
const excel = require("exceljs");

@Injectable()
export class ItemOrderedService {
  constructor(
    @InjectRepository(Reqitemorder001mb)
    private readonly itemOrderedRepository: Repository<Reqitemorder001mb>,
    @InjectRepository(Reqitemorder001hb)
    private readonly itemOrderedhbRepository: Repository<Reqitemorder001hb>
  ) {}

  async create(reqitemorderDTO: ReqitemorderDTO): Promise<Reqitemorder001mb> {
    const reqitemorder001mb = new Reqitemorder001mb();
    reqitemorder001mb.setProperties(reqitemorderDTO);
    return this.itemOrderedRepository.save(reqitemorder001mb);
  }

  async update(reqitemorderDTO: ReqitemorderDTO): Promise<Reqitemorder001mb> {
    const reqitemorder001mb = new Reqitemorder001mb();
    reqitemorder001mb.setProperties(reqitemorderDTO);
    await this.itemOrderedRepository.update(
      { mrsId: reqitemorder001mb.mrsId },
      reqitemorder001mb
    );
    return reqitemorder001mb;
  }

  async findAll(): Promise<Reqitemorder001mb[]> {
    return this.itemOrderedRepository.find();
  }

  findOne(id: string): Promise<Reqitemorder001mb> {
    return this.itemOrderedRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    let itemOrdered = this.itemOrderedRepository.findOne(id);
    let reqitemorder001hb = new Reqitemorder001hb();
    reqitemorder001hb.setProperties(await itemOrdered);
    this.itemOrderedhbRepository.save(reqitemorder001hb);
    await this.itemOrderedRepository.delete(id);
  }

  async downloadPdf(@Req() request: Request, @Res() response: Response) {
    var html = fs.readFileSync("./html_pdf/item-group.html", "utf8");
    let itemOrdered: any[] = await this.itemOrderedRepository.find();

    var document = {
      html: html,
      data: {
        ItemOrdered: itemOrdered,
      },
      path: path.join(`./pdf/itemOrdered.pdf`),
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
      },
    };
    if (itemOrdered.length < 0) {
      return;
    } else {
      pdf
        .create(document, options)
        .then((pathRes) => {
          const filestream = fs.createReadStream(pathRes.filename);
          response.writeHead(200, {
            "Content-Disposition": "attachment;filename=" + "itemOrdered.pdf",
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
    let itemOrdered = await this.itemOrderedRepository.find();

    if (itemOrdered.length < 0) {
      return;
    } else {
      let workbook = new excel.Workbook();
      let worksheet = workbook.addWorksheet("itemOrdered");
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

      worksheet.mergeCells("A1:J1");
      worksheet.getCell("A1:J1").value = "NANDALALA ERP";
      worksheet.getCell("A1:J1").font = {
        size: 20,
        bold: true,
      };
      worksheet.getCell("A1:J1").fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "ffffff" },
        bgColor: { argb: "#7f11e0" },
      };
      worksheet.getCell("A1:J1").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("A2:J2");
      worksheet.getCell("A2:J2").value = "Item Ordered";
      worksheet.getCell("A2:J2").font = {
        size: 16,
        bold: true,
      };
      worksheet.getCell("A2:J2").alignment = {
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
      worksheet.getCell("B3").value = "Item";
      worksheet.getCell("B3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("B3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("C3");
      worksheet.getCell("C3").value = "MRSeries";
      worksheet.getCell("C3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("C3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("D3");
      worksheet.getCell("D3").value = "Date";
      worksheet.getCell("D3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("D3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("E3");
      worksheet.getCell("E3").value = "Quantity";
      worksheet.getCell("E3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("E3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("F3");
      worksheet.getCell("F3").value = "Company";
      worksheet.getCell("F3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("F3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("G3");
      worksheet.getCell("G3").value = "Ordered Quantity";
      worksheet.getCell("G3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("G3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("H3");
      worksheet.getCell("H3").value = "Quantity to Order";
      worksheet.getCell("H3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("H3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("I3");
      worksheet.getCell("I3").value = "Qtyr to Order";
      worksheet.getCell("I3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("I3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("J3");
      worksheet.getCell("J3").value = "Description";
      worksheet.getCell("J3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("J3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      for (let i = 0; i < itemOrdered.length; i++) {
        let temp = i + 4;

        worksheet.mergeCells("A" + temp);
        worksheet.getCell("A" + temp).value = itemOrdered[i].mrsId;
        worksheet.getCell("A" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("A" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("B" + temp);
        worksheet.getCell("B" + temp).value = itemOrdered[i].itemCode;
        worksheet.getCell("B" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("B" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("C" + temp);
        worksheet.getCell("C" + temp).value = itemOrdered[i].mrSeries;
        worksheet.getCell("C" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("C" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("D" + temp);
        worksheet.getCell("D" + temp).value = itemOrdered[i].date;
        worksheet.getCell("D" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("D" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("E" + temp);
        worksheet.getCell("E" + temp).value = itemOrdered[i].quantity;
        worksheet.getCell("E" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("E" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("F" + temp);
        worksheet.getCell("F" + temp).value = itemOrdered[i].company;
        worksheet.getCell("F" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("F" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("G" + temp);
        worksheet.getCell("G" + temp).value = itemOrdered[i].orderedqty;
        worksheet.getCell("G" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("G" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("H" + temp);
        worksheet.getCell("H" + temp).value = itemOrdered[i].qtytoorder;
        worksheet.getCell("H" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("H" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("I" + temp);
        worksheet.getCell("I" + temp).value = itemOrdered[i].qtyrtoorder;
        worksheet.getCell("I" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("I" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("J" + temp);
        worksheet.getCell("J" + temp).value = itemOrdered[i].description;
        worksheet.getCell("J" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("J" + temp).alignment = {
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

import { Injectable, Req, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Response } from "express";
import * as fs from "fs";
import * as path from "path";
import { ItemshortagerepDTO } from "../dto/Itemshortagerep.dto";
import { Itemshortagerep001hb } from "../entity/Itemshortagerep001hb";
import { Itemshortagerep001mb } from "../entity/Itemshortagerep001mb";
import { Request } from "supertest";
import { Repository } from "typeorm";
var pdf = require("pdf-creator-node");
const excel = require("exceljs");

@Injectable()
export class ItemShortageService {
  constructor(
    @InjectRepository(Itemshortagerep001mb)
    private readonly itemShortageRepository: Repository<Itemshortagerep001mb>,
    @InjectRepository(Itemshortagerep001hb)
    private readonly itemShortagehbRepository: Repository<Itemshortagerep001hb>
  ) {}

  async create(
    itemshortagerepDTO: ItemshortagerepDTO
  ): Promise<Itemshortagerep001mb> {
    const itemshortagerep001mb = new Itemshortagerep001mb();
    itemshortagerep001mb.setProperties(itemshortagerepDTO);
    return this.itemShortageRepository.save(itemshortagerep001mb);
  }
  async update(
    itemshortagerepDTO: ItemshortagerepDTO
  ): Promise<Itemshortagerep001mb> {
    const itemshortagerep001mb = new Itemshortagerep001mb();
    itemshortagerep001mb.setProperties(itemshortagerepDTO);
    await this.itemShortageRepository.update(
      { shrepId: itemshortagerep001mb.shrepId },
      itemshortagerep001mb
    );
    return itemshortagerep001mb;
  }

  async findAll(): Promise<Itemshortagerep001mb[]> {
    return this.itemShortageRepository.find();
  }
  findOne(id: number): Promise<Itemshortagerep001mb> {
    return this.itemShortageRepository.findOne(id);
  }
  async remove(id: number): Promise<void> {
    let itemShortage = this.itemShortageRepository.findOne(id);
    let itemshortagerep001hb = new Itemshortagerep001hb();
    itemshortagerep001hb.setProperties(await itemShortage);
    this.itemShortagehbRepository.save(itemshortagerep001hb);
    await this.itemShortageRepository.delete(id);
  }

  async downloadPdf(@Req() request: Request, @Res() response: Response) {
    var html = fs.readFileSync("./html_pdf/itemShortage.html", "utf8");
    let itemShortage: any[] = await this.itemShortageRepository.find();

    var document = {
      html: html,
      data: {
        ItemShortage: itemShortage,
      },
      path: path.join(`./pdf/itemShortage.pdf`),
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
    if (itemShortage.length < 0) {
      return;
    } else {
      pdf
        .create(document, options)
        .then((pathRes) => {
          const filestream = fs.createReadStream(pathRes.filename);
          response.writeHead(200, {
            "Content-Disposition": "attachment;filename=" + "itemShortage.pdf",
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
    let itemShortage = await this.itemShortageRepository.find();

    if (itemShortage.length < 0) {
      return;
    } else {
      let workbook = new excel.Workbook();
      let worksheet = workbook.addWorksheet("itemShortage");
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

      worksheet.mergeCells("A1:H1");
      worksheet.getCell("A1:H1").value = "NANDALALA ERP";
      worksheet.getCell("A1:H1").font = {
        size: 20,
        bold: true,
      };
      worksheet.getCell("A1:H1").fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "ffffff" },
        bgColor: { argb: "#7f11e0" },
      };
      worksheet.getCell("A1:H1").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("A2:H2");
      worksheet.getCell("A2:H2").value = "Item Shortage Report";
      worksheet.getCell("A2:H2").font = {
        size: 16,
        bold: true,
      };
      worksheet.getCell("A2:H2").alignment = {
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
      worksheet.getCell("B3").value = "WareHouse";
      worksheet.getCell("B3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("B3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("C3");
      worksheet.getCell("C3").value = "Item";
      worksheet.getCell("C3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("C3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("D3");
      worksheet.getCell("D3").value = "Actual Quantity";
      worksheet.getCell("D3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("D3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("E3");
      worksheet.getCell("E3").value = "Ordered Quantity";
      worksheet.getCell("E3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("E3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("F3");
      worksheet.getCell("F3").value = "Planned Quantity";
      worksheet.getCell("F3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("F3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("G3");
      worksheet.getCell("G3").value = "Reserved Quantity";
      worksheet.getCell("G3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("G3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("H3");
      worksheet.getCell("H3").value = "Projected Quantity";
      worksheet.getCell("H3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("H3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      for (let i = 0; i < itemShortage.length; i++) {
        let temp = i + 4;

        worksheet.mergeCells("A" + temp);
        worksheet.getCell("A" + temp).value = itemShortage[i].shrepId;
        worksheet.getCell("A" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("A" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("B" + temp);
        worksheet.getCell("B" + temp).value = itemShortage[i].warehouseName;
        worksheet.getCell("B" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("B" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("C" + temp);
        worksheet.getCell("C" + temp).value = itemShortage[i].itemCode;
        worksheet.getCell("C" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("C" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("D" + temp);
        worksheet.getCell("D" + temp).value = itemShortage[i].actualQty;
        worksheet.getCell("D" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("D" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("E" + temp);
        worksheet.getCell("E" + temp).value = itemShortage[i].orderedQty;
        worksheet.getCell("E" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("E" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("F" + temp);
        worksheet.getCell("F" + temp).value = itemShortage[i].plannedQty;
        worksheet.getCell("F" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("F" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("G" + temp);
        worksheet.getCell("G" + temp).value = itemShortage[i].reservedQty;
        worksheet.getCell("G" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("G" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("H" + temp);
        worksheet.getCell("H" + temp).value = itemShortage[i].projectedQty;
        worksheet.getCell("H" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("H" + temp).alignment = {
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

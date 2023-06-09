import { Injectable, Req, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Response } from "express";
import * as fs from "fs";
import * as path from "path";
import { ItempuhistDTO } from "../dto/Itempuhist.dto";
import { Itempuhist001hb } from "../entity/Itempuhist001hb";
import { Itempuhist001mb } from "../entity/Itempuhist001mb";
import { Request } from "supertest";
import { Repository } from "typeorm";
var pdf = require("pdf-creator-node");
const excel = require("exceljs");

@Injectable()
export class ItemPuhistoryService {
  constructor(
    @InjectRepository(Itempuhist001mb)
    private readonly itemPuhistoryRepository: Repository<Itempuhist001mb>,
    @InjectRepository(Itempuhist001hb)
    private readonly itemPuhistoryhbRepository: Repository<Itempuhist001mb>
  ) {}

  async create(itempuhistDTO: ItempuhistDTO): Promise<Itempuhist001mb> {
    const itempuhist001mb = new Itempuhist001mb();
    itempuhist001mb.setProperties(itempuhistDTO);
    return this.itemPuhistoryRepository.save(itempuhist001mb);
  }

  async update(itempuhistDTO: ItempuhistDTO): Promise<Itempuhist001mb> {
    const itempuhist001mb = new Itempuhist001mb();
    itempuhist001mb.setProperties(itempuhistDTO);
    await this.itemPuhistoryRepository.update(
      { histId: itempuhist001mb.histId },
      itempuhist001mb
    );
    return itempuhist001mb;
  }

  async findAll(): Promise<Itempuhist001mb[]> {
    return this.itemPuhistoryRepository.find();
  }

  findOne(id: string): Promise<Itempuhist001mb> {
    return this.itemPuhistoryRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    let itemPuhistory = this.itemPuhistoryRepository.findOne(id);
    let itempuhist001hb = new Itempuhist001hb();
    itempuhist001hb.setProperties(await itemPuhistory);
    this.itemPuhistoryhbRepository.save(itempuhist001hb);
    await this.itemPuhistoryRepository.delete(id);
  }

  async downloadPdf(@Req() request: Request, @Res() response: Response) {
    var html = fs.readFileSync("./html_pdf/item-puhistory.html", "utf8");
    let itemPuhistory: any[] = await this.itemPuhistoryRepository.find();

    var document = {
      html: html,
      data: {
        ItemPuhistory: itemPuhistory,
      },
      path: path.join(`./pdf/itemPuhistory.pdf`),
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
    if (itemPuhistory.length < 0) {
      return;
    } else {
      pdf
        .create(document, options)
        .then((pathRes) => {
          const filestream = fs.createReadStream(pathRes.filename);
          response.writeHead(200, {
            "Content-Disposition": "attachment;filename=" + "itemPuhistory.pdf",
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
    let itemPuhistory = await this.itemPuhistoryRepository.find();

    if (itemPuhistory.length < 0) {
      return;
    } else {
      let workbook = new excel.Workbook();
      let worksheet = workbook.addWorksheet("itemPuhistory");
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
        { key: "K", width: 20.0 },
        { key: "L", width: 20.0 },
        { key: "M", width: 20.0 },
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

      worksheet.mergeCells("A1:M1");
      worksheet.getCell("A1:M1").value = "NANDALALA ERP";
      worksheet.getCell("A1:M1").font = {
        size: 20,
        bold: true,
      };
      worksheet.getCell("A1:M1").fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "ffffff" },
        bgColor: { argb: "#7f11e0" },
      };
      worksheet.getCell("A1:M1").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("A2:M2");
      worksheet.getCell("A2:M2").value = "Item Purchase History";
      worksheet.getCell("A2:M2").font = {
        size: 16,
        bold: true,
      };
      worksheet.getCell("A2:M2").alignment = {
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
      worksheet.getCell("C3").value = "Item Group";
      worksheet.getCell("C3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("C3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("D3");
      worksheet.getCell("D3").value = "Quantity";
      worksheet.getCell("D3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("D3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("E3");
      worksheet.getCell("E3").value = "UOM";
      worksheet.getCell("E3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("E3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("F3");
      worksheet.getCell("F3").value = "Date";
      worksheet.getCell("F3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("F3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("G3");
      worksheet.getCell("G3").value = "Amount";
      worksheet.getCell("G3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("G3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("H3");
      worksheet.getCell("H3").value = "Purchase Order";
      worksheet.getCell("H3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("H3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("I3");
      worksheet.getCell("I3").value = "Transaction Date";
      worksheet.getCell("I3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("I3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("J3");
      worksheet.getCell("J3").value = "Supplier";
      worksheet.getCell("J3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("J3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("K3");
      worksheet.getCell("K3").value = "Received Qty";
      worksheet.getCell("K3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("K3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("L3");
      worksheet.getCell("L3").value = "Company";
      worksheet.getCell("L3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("L3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("M3");
      worksheet.getCell("M3").value = "Description";
      worksheet.getCell("M3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("M3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      for (let i = 0; i < itemPuhistory.length; i++) {
        let temp = i + 4;

        worksheet.mergeCells("A" + temp);
        worksheet.getCell("A" + temp).value = itemPuhistory[i].histId;
        worksheet.getCell("A" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("A" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("B" + temp);
        worksheet.getCell("B" + temp).value = itemPuhistory[i].itemCode;
        worksheet.getCell("B" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("B" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("C" + temp);
        worksheet.getCell("C" + temp).value = itemPuhistory[i].itemGroup;
        worksheet.getCell("C" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("C" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("D" + temp);
        worksheet.getCell("D" + temp).value = itemPuhistory[i].quantity;
        worksheet.getCell("D" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("D" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("E" + temp);
        worksheet.getCell("E" + temp).value = itemPuhistory[i].uom;
        worksheet.getCell("E" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("E" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("F" + temp);
        worksheet.getCell("F" + temp).value = itemPuhistory[i].date;
        worksheet.getCell("F" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("F" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("G" + temp);
        worksheet.getCell("G" + temp).value = itemPuhistory[i].amount;
        worksheet.getCell("G" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("G" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("H" + temp);
        worksheet.getCell("H" + temp).value = itemPuhistory[i].poSeries;
        worksheet.getCell("H" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("H" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("I" + temp);
        worksheet.getCell("I" + temp).value = itemPuhistory[i].transDate;
        worksheet.getCell("I" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("I" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("J" + temp);
        worksheet.getCell("J" + temp).value = itemPuhistory[i].supplier;
        worksheet.getCell("J" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("J" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("K" + temp);
        worksheet.getCell("K" + temp).value = itemPuhistory[i].receivedqty;
        worksheet.getCell("K" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("K" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("L" + temp);
        worksheet.getCell("L" + temp).value = itemPuhistory[i].company;
        worksheet.getCell("L" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("L" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("M" + temp);
        worksheet.getCell("M" + temp).value = itemPuhistory[i].description;
        worksheet.getCell("M" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("M" + temp).alignment = {
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

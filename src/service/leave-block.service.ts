import { Injectable, Req, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Response } from "express";
import * as fs from "fs";
import * as path from "path";
import { LvblocklistDTO } from "../dto/Lvblocklist.dto";
import { Lvblocklist001hb } from "../entity/Lvblocklist001hb";
import { Lvblocklist001mb } from "../entity/Lvblocklist001mb";
import { Request } from "supertest";
import { Repository } from "typeorm";
var pdf = require("pdf-creator-node");
const excel = require("exceljs");

@Injectable()
export class LeaveBlockService {
  constructor(
    @InjectRepository(Lvblocklist001mb)
    private readonly leaveBlockRepository: Repository<Lvblocklist001mb>,
    @InjectRepository(Lvblocklist001hb)
    private readonly leaveBlockhbRepository: Repository<Lvblocklist001hb>
  ) {}

  async create(lvblocklistDTO: LvblocklistDTO): Promise<Lvblocklist001mb> {
    const lvblocklist001mb = new Lvblocklist001mb();
    lvblocklist001mb.setProperties(lvblocklistDTO);
    return this.leaveBlockRepository.save(lvblocklist001mb);
  }
  async update(lvblocklistDTO: LvblocklistDTO): Promise<Lvblocklist001mb> {
    const lvblocklist001mb = new Lvblocklist001mb();
    lvblocklist001mb.setProperties(lvblocklistDTO);
    await this.leaveBlockRepository.update(
      { lvblockId: lvblocklist001mb.lvblockId },
      lvblocklist001mb
    );
    return lvblocklist001mb;
  }

  async findAll(): Promise<Lvblocklist001mb[]> {
    return this.leaveBlockRepository.find();
  }
  findOne(id: number): Promise<Lvblocklist001mb> {
    return this.leaveBlockRepository.findOne(id);
  }
  async remove(id: number): Promise<void> {
    let leaveBlock = this.leaveBlockRepository.findOne(id);
    let lvblocklist001hb = new Lvblocklist001hb();
    lvblocklist001hb.setProperties(await leaveBlock);
    this.leaveBlockhbRepository.save(lvblocklist001hb);
    await this.leaveBlockRepository.delete(id);
  }

  async downloadPdf(@Req() request: Request, @Res() response: Response) {
    var html = fs.readFileSync("./html_pdf/leaveBlock.html", "utf8");
    let leaveBlock: any[] = await this.leaveBlockRepository.find();

    var document = {
      html: html,
      data: {
        LeaveBlock: leaveBlock,
      },
      path: path.join(`./pdf/leaveBlock.pdf`),
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
    if (leaveBlock.length < 0) {
      return;
    } else {
      pdf
        .create(document, options)
        .then((pathRes) => {
          const filestream = fs.createReadStream(pathRes.filename);
          response.writeHead(200, {
            "Content-Disposition": "attachment;filename=" + "leaveBlock.pdf",
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
    let leaveBlock = await this.leaveBlockRepository.find();

    if (leaveBlock.length < 0) {
      return;
    } else {
      let workbook = new excel.Workbook();
      let worksheet = workbook.addWorksheet("leaveBlock");
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

      worksheet.mergeCells("A1:C1");
      worksheet.getCell("A1:C1").value = "NANDALALA ERP";
      worksheet.getCell("A1:C1").font = {
        size: 20,
        bold: true,
      };
      worksheet.getCell("A1:C1").fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "ffffff" },
        bgColor: { argb: "#7f11e0" },
      };
      worksheet.getCell("A1:C1").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("A2:C2");
      worksheet.getCell("A2:C2").value = "Employee Attendance List";
      worksheet.getCell("A2:C2").font = {
        size: 16,
        bold: true,
      };
      worksheet.getCell("A2:C2").alignment = {
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
      worksheet.getCell("B3").value = "Block Name";
      worksheet.getCell("B3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("B3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("C3");
      worksheet.getCell("C3").value = "Company";
      worksheet.getCell("C3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("C3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      for (let i = 0; i < leaveBlock.length; i++) {
        let temp = i + 4;

        worksheet.mergeCells("A" + temp);
        worksheet.getCell("A" + temp).value = leaveBlock[i].lvblockId;
        worksheet.getCell("A" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("A" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("B" + temp);
        worksheet.getCell("B" + temp).value = leaveBlock[i].blockName;
        worksheet.getCell("B" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("B" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("C" + temp);
        worksheet.getCell("C" + temp).value = leaveBlock[i].company;
        worksheet.getCell("C" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("C" + temp).alignment = {
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

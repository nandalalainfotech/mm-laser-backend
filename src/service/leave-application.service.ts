import { Injectable, Req, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Response } from "express";
import * as fs from "fs";
import * as path from "path";
import { LeaveappDTO } from "../dto/Leaveapp.dto";
import { Leaveapp001hb } from "../entity/Leaveapp001hb";
import { Leaveapp001mb } from "../entity/Leaveapp001mb";
import { Request } from "supertest";
import { Repository } from "typeorm";
var pdf = require("pdf-creator-node");
const excel = require("exceljs");

@Injectable()
export class LeaveApplicationService {
  constructor(
    @InjectRepository(Leaveapp001mb)
    private readonly leaveApplicationRepository: Repository<Leaveapp001mb>,
    @InjectRepository(Leaveapp001hb)
    private readonly leaveApplicationhbRepository: Repository<Leaveapp001hb>
  ) {}

  async create(leaveappDTO: LeaveappDTO): Promise<Leaveapp001mb> {
    const leaveapp001mb = new Leaveapp001mb();
    leaveapp001mb.setProperties(leaveappDTO);
    return this.leaveApplicationRepository.save(leaveapp001mb);
  }

  async update(leaveappDTO: LeaveappDTO): Promise<Leaveapp001mb> {
    const leaveapp001mb = new Leaveapp001mb();
    leaveapp001mb.setProperties(leaveappDTO);
    await this.leaveApplicationRepository.update(
      { lvappId: leaveapp001mb.lvappId },
      leaveapp001mb
    );
    return leaveapp001mb;
  }

  async findAll(): Promise<Leaveapp001mb[]> {
    return this.leaveApplicationRepository.find();
  }

  findOne(id: number): Promise<Leaveapp001mb> {
    return this.leaveApplicationRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    let leaveApplication = this.leaveApplicationRepository.findOne(id);
    let leaveapp001hb = new Leaveapp001hb();
    leaveapp001hb.setProperties(await leaveApplication);
    this.leaveApplicationhbRepository.save(leaveapp001hb);
    await this.leaveApplicationRepository.delete(id);
  }

  async downloadPdf(@Req() request: Request, @Res() response: Response) {
    var html = fs.readFileSync("./html_pdf/leaveApplication.html", "utf8");
    let leaveApplication: any[] = await this.leaveApplicationRepository.find();

    var document = {
      html: html,
      data: {
        LeaveApplication: leaveApplication,
      },
      path: path.join(`./pdf/leaveApplication.pdf`),
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
    if (leaveApplication.length < 0) {
      return;
    } else {
      pdf
        .create(document, options)
        .then((pathRes) => {
          const filestream = fs.createReadStream(pathRes.filename);
          response.writeHead(200, {
            "Content-Disposition":
              "attachment;filename=" + "leaveApplication.pdf",
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
    let leaveApplication = await this.leaveApplicationRepository.find();

    if (leaveApplication.length < 0) {
      return;
    } else {
      let workbook = new excel.Workbook();
      let worksheet = workbook.addWorksheet("leaveApplication");
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
        { key: "E", width: 15.0 },
        { key: "F", width: 20.0 },
        { key: "G", width: 20.0 },
        { key: "H", width: 20.0 },
        { key: "I", width: 15.0 },
        { key: "J", width: 20.0 },
        { key: "K", width: 20.0 },
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

      worksheet.mergeCells("A1:K1");
      worksheet.getCell("A1:K1").value = "NANDALALA ERP";
      worksheet.getCell("A1:K1").font = {
        size: 20,
        bold: true,
      };
      worksheet.getCell("A1:K1").fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "ffffff" },
        bgColor: { argb: "#7f11e0" },
      };
      worksheet.getCell("A1:K1").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("A2:K2");
      worksheet.getCell("A2:K2").value = "Make Leave Applications";
      worksheet.getCell("A2:K2").font = {
        size: 16,
        bold: true,
      };
      worksheet.getCell("A2:K2").alignment = {
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
      worksheet.getCell("B3").value = "Series";
      worksheet.getCell("B3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("B3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("C3");
      worksheet.getCell("C3").value = "Status";
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
      worksheet.mergeCells("E3");
      worksheet.getCell("E3").value = "To Date";
      worksheet.getCell("E3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("E3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };
      worksheet.mergeCells("F3");
      worksheet.getCell("F3").value = "Posting Date";
      worksheet.getCell("F3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("F3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };
      worksheet.mergeCells("G3");
      worksheet.getCell("G3").value = "Employee";
      worksheet.getCell("G3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("G3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };
      worksheet.mergeCells("H3");
      worksheet.getCell("H3").value = "Leave Approver";
      worksheet.getCell("H3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("H3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };
      worksheet.mergeCells("I3");
      worksheet.getCell("I3").value = "Company";
      worksheet.getCell("I3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("I3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };
      worksheet.mergeCells("J3");
      worksheet.getCell("J3").value = "Department Name";
      worksheet.getCell("J3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("J3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };
      worksheet.mergeCells("K3");
      worksheet.getCell("K3").value = "Reason";
      worksheet.getCell("K3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("K3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      for (let i = 0; i < leaveApplication.length; i++) {
        let temp = i + 4;

        worksheet.mergeCells("A" + temp);
        worksheet.getCell("A" + temp).value = leaveApplication[i].lvappId;
        worksheet.getCell("A" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("A" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("B" + temp);
        worksheet.getCell("B" + temp).value = leaveApplication[i].series;
        worksheet.getCell("B" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("B" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("C" + temp);
        worksheet.getCell("C" + temp).value = leaveApplication[i].leaveType;
        worksheet.getCell("C" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("C" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("D" + temp);
        worksheet.getCell("D" + temp).value = leaveApplication[i].fromDate;
        worksheet.getCell("D" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("D" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("E" + temp);
        worksheet.getCell("E" + temp).value = leaveApplication[i].toDate;
        worksheet.getCell("E" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("E" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("F" + temp);
        worksheet.getCell("F" + temp).value = leaveApplication[i].postingDate;
        worksheet.getCell("F" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("F" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("G" + temp);
        worksheet.getCell("G" + temp).value = leaveApplication[i].empNumber;
        worksheet.getCell("G" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("G" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("H" + temp);
        worksheet.getCell("H" + temp).value = leaveApplication[i].leaveApprover;
        worksheet.getCell("H" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("H" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("I" + temp);
        worksheet.getCell("I" + temp).value = leaveApplication[i].company;
        worksheet.getCell("I" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("I" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("J" + temp);
        worksheet.getCell("J" + temp).value = leaveApplication[i].deptName;
        worksheet.getCell("J" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("J" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("K" + temp);
        worksheet.getCell("K" + temp).value = leaveApplication[i].reason;
        worksheet.getCell("K" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("K" + temp).alignment = {
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

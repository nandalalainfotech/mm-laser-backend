import { Injectable, Req, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Response } from "express";
import * as fs from "fs";
import * as path from "path";
import { JounalentryDTO } from "../dto/Jounalentry.dto";
import { Jounalentry001hb } from "../entity/Jounalentry001hb";
import { Jounalentry001mb } from "../entity/Jounalentry001mb";
import { Request } from "supertest";
import { Repository } from "typeorm";
var pdf = require("pdf-creator-node");
const excel = require("exceljs");

@Injectable()
export class JournalEntryService {
  constructor(
    @InjectRepository(Jounalentry001mb)
    private readonly journalentryRepository: Repository<Jounalentry001mb>,
    @InjectRepository(Jounalentry001hb)
    private readonly journalentryhbRepository: Repository<Jounalentry001hb>
  ) {}

  async create(jounalEntryDTO: JounalentryDTO): Promise<Jounalentry001mb> {
    const jounalentry001mb = new Jounalentry001mb();
    jounalentry001mb.setProperties(jounalEntryDTO);
    return this.journalentryRepository.save(jounalentry001mb);
  }

  async update(jounalEntryDTO: JounalentryDTO): Promise<Jounalentry001mb> {
    const jounalentry001mb = new Jounalentry001mb();
    jounalentry001mb.setProperties(jounalEntryDTO);
    await this.journalentryRepository.update(
      { jeId: jounalentry001mb.jeId },
      jounalentry001mb
    );
    return jounalentry001mb;
  }

  async findAll(): Promise<Jounalentry001mb[]> {
    return this.journalentryRepository.find();
  }

  findOne(id: string): Promise<Jounalentry001mb> {
    return this.journalentryRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    let journalentry = this.journalentryRepository.findOne(id);
    let jounalentry001hb = new Jounalentry001hb();
    jounalentry001hb.setProperties(await journalentry);
    this.journalentryhbRepository.save(jounalentry001hb);
    await this.journalentryRepository.delete(id);
  }

  async downloadPdf(@Req() request: Request, @Res() response: Response) {
    var html = fs.readFileSync("./html_pdf/journalentry.html", "utf8");
    let journalentry: any[] = await this.journalentryRepository.find();

    var document = {
      html: html,
      data: {
        Journalentry: journalentry,
      },
      path: path.join(`./pdf/journalentry.pdf`),
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
    if (journalentry.length < 0) {
      return;
    } else {
      pdf
        .create(document, options)
        .then((pathRes) => {
          const filestream = fs.createReadStream(pathRes.filename);
          response.writeHead(200, {
            "Content-Disposition": "attachment;filename=" + "journalentry.pdf",
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
    let journalentry = await this.journalentryRepository.find();

    if (journalentry.length < 0) {
      return;
    } else {
      let workbook = new excel.Workbook();
      let worksheet = workbook.addWorksheet("journalentry");
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

      worksheet.mergeCells("A1:L1");
      worksheet.getCell("A1:L1").value = "NANDALALA ERP";
      worksheet.getCell("A1:L1").font = {
        size: 20,
        bold: true,
      };
      worksheet.getCell("A1:L1").fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "ffffff" },
        bgColor: { argb: "#7f11e0" },
      };
      worksheet.getCell("A1:L1").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("A2:L2");
      worksheet.getCell("A2:L2").value = "Journal Entry";
      worksheet.getCell("A2:L2").font = {
        size: 16,
        bold: true,
      };
      worksheet.getCell("A2:L2").alignment = {
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
      worksheet.getCell("B3").value = "Title";
      worksheet.getCell("B3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("B3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("C3");
      worksheet.getCell("C3").value = "Entry Type";
      worksheet.getCell("C3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("C3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("D3");
      worksheet.getCell("D3").value = "Reference Number";
      worksheet.getCell("D3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("D3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("E3");
      worksheet.getCell("E3").value = "Series";
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
      worksheet.getCell("G3").value = "Reference Date";
      worksheet.getCell("G3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("G3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("H3");
      worksheet.getCell("H3").value = "Account";
      worksheet.getCell("H3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("H3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("I3");
      worksheet.getCell("I3").value = "Party Name";
      worksheet.getCell("I3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("I3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("J3");
      worksheet.getCell("J3").value = "Debit";
      worksheet.getCell("J3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("J3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("K3");
      worksheet.getCell("K3").value = "Credit";
      worksheet.getCell("K3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("K3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("L3");
      worksheet.getCell("L3").value = "Document Status";
      worksheet.getCell("L3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("L3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      for (let i = 0; i < journalentry.length; i++) {
        let temp = i + 4;

        worksheet.mergeCells("A" + temp);
        worksheet.getCell("A" + temp).value = journalentry[i].jeId;
        worksheet.getCell("A" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("A" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("B" + temp);
        worksheet.getCell("B" + temp).value = journalentry[i].title;
        worksheet.getCell("B" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("B" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("C" + temp);
        worksheet.getCell("C" + temp).value = journalentry[i].status;
        worksheet.getCell("C" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("C" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("D" + temp);
        worksheet.getCell("D" + temp).value = journalentry[i].referenceNumber;
        worksheet.getCell("D" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("D" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("E" + temp);
        worksheet.getCell("E" + temp).value = journalentry[i].jeSeries;
        worksheet.getCell("E" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("E" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("F" + temp);
        worksheet.getCell("F" + temp).value = journalentry[i].postingDate;
        worksheet.getCell("F" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("F" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("G" + temp);
        worksheet.getCell("G" + temp).value = journalentry[i].referenceDate;
        worksheet.getCell("G" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("G" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("H" + temp);
        worksheet.getCell("H" + temp).value = journalentry[i].accountName;
        worksheet.getCell("H" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("H" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("I" + temp);
        worksheet.getCell("I" + temp).value = journalentry[i].partyName;
        worksheet.getCell("I" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("I" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("J" + temp);
        worksheet.getCell("J" + temp).value = journalentry[i].debit;
        worksheet.getCell("J" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("J" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("K" + temp);
        worksheet.getCell("K" + temp).value = journalentry[i].credit;
        worksheet.getCell("K" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("K" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("L" + temp);
        worksheet.getCell("L" + temp).value = journalentry[i].docStatus;
        worksheet.getCell("L" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("L" + temp).alignment = {
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

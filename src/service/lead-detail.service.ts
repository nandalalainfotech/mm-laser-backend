import { Injectable, Req, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Response } from "express";
import * as fs from "fs";
import * as path from "path";
import { LeadDTO } from "../dto/Lead.dto";
import { Lead001hb } from "../entity/Lead001hb";
import { Lead001mb } from "../entity/Lead001mb";
import { Request } from "supertest";
import { Repository } from "typeorm";
var pdf = require("pdf-creator-node");
const excel = require("exceljs");

@Injectable()
export class LeadDetailService {
  constructor(
    @InjectRepository(Lead001mb)
    private readonly leaddetailRepository: Repository<Lead001mb>,
    @InjectRepository(Lead001hb)
    private readonly leaddetailhbRepository: Repository<Lead001hb>
  ) {}

  async create(leadDTO: LeadDTO): Promise<Lead001mb> {
    const lead001mb = new Lead001mb();
    lead001mb.setProperties(leadDTO);
    return this.leaddetailRepository.save(lead001mb);
  }

  async update(leadDTO: LeadDTO): Promise<Lead001mb> {
    const lead001mb = new Lead001mb();
    lead001mb.setProperties(leadDTO);
    await this.leaddetailRepository.update({ id: lead001mb.id }, lead001mb);
    return lead001mb;
  }

  async findAll(): Promise<Lead001mb[]> {
    return this.leaddetailRepository.find();
  }

  findOne(id: string): Promise<Lead001mb> {
    return this.leaddetailRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    let leaddetail = this.leaddetailRepository.findOne(id);
    let lead001hb = new Lead001hb();
    lead001hb.setProperties(await leaddetail);
    this.leaddetailhbRepository.save(lead001hb);
    await this.leaddetailRepository.delete(id);
  }

  async downloadPdf(@Req() request: Request, @Res() response: Response) {
    var html = fs.readFileSync("./html_pdf/leadDetail.html", "utf8");
    let leaddetail: any[] = await this.leaddetailRepository.find();

    var document = {
      html: html,
      data: {
        Leaddetail: leaddetail,
      },
      path: path.join(`./pdf/salesorder.pdf`),
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
    if (leaddetail.length < 0) {
      return;
    } else {
      pdf
        .create(document, options)
        .then((pathRes) => {
          const filestream = fs.createReadStream(pathRes.filename);
          response.writeHead(200, {
            "Content-Disposition": "attachment;filename=" + "salesorder.pdf",
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
    let leaddetail = await this.leaddetailRepository.find();

    if (leaddetail.length < 0) {
      return;
    } else {
      let workbook = new excel.Workbook();
      let worksheet = workbook.addWorksheet("leaddetail");
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

      worksheet.mergeCells("A1:I1");
      worksheet.getCell("A1:I1").value = "NANDALALA ERP";
      worksheet.getCell("A1:I1").font = {
        size: 20,
        bold: true,
      };
      worksheet.getCell("A1:I1").fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "ffffff" },
        bgColor: { argb: "#7f11e0" },
      };
      worksheet.getCell("A1:I1").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("A2:I2");
      worksheet.getCell("A2:I2").value = "Lead Details";
      worksheet.getCell("A2:I2").font = {
        size: 16,
        bold: true,
      };
      worksheet.getCell("A2:I2").alignment = {
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
      worksheet.getCell("B3").value = "Person Name";
      worksheet.getCell("B3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("B3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("C3");
      worksheet.getCell("C3").value = "Organisation Name";
      worksheet.getCell("C3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("C3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("D3");
      worksheet.getCell("D3").value = "Status";
      worksheet.getCell("D3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("D3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("E3");
      worksheet.getCell("E3").value = "Source";
      worksheet.getCell("E3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("E3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("F3");
      worksheet.getCell("F3").value = "Lead Owner";
      worksheet.getCell("F3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("F3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("G3");
      worksheet.getCell("G3").value = "Next Contact By";
      worksheet.getCell("G3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("G3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("H3");
      worksheet.getCell("H3").value = "Lead Type";
      worksheet.getCell("H3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("I3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      worksheet.mergeCells("I3");
      worksheet.getCell("I3").value = "Market Segment";
      worksheet.getCell("I3").font = {
        size: 12,
        bold: true,
      };
      worksheet.getCell("I3").alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      for (let i = 0; i < leaddetail.length; i++) {
        let temp = i + 4;

        worksheet.mergeCells("A" + temp);
        worksheet.getCell("A" + temp).value = leaddetail[i].id;
        worksheet.getCell("A" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("A" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("B" + temp);
        worksheet.getCell("B" + temp).value = leaddetail[i].personname;
        worksheet.getCell("B" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("B" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("C" + temp);
        worksheet.getCell("C" + temp).value = leaddetail[i].organisationname;
        worksheet.getCell("C" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("C" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("D" + temp);
        worksheet.getCell("D" + temp).value = leaddetail[i].status;
        worksheet.getCell("D" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("D" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("E" + temp);
        worksheet.getCell("E" + temp).value = leaddetail[i].source;
        worksheet.getCell("E" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("E" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("F" + temp);
        worksheet.getCell("F" + temp).value = leaddetail[i].leadowner;
        worksheet.getCell("F" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("F" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("G" + temp);
        worksheet.getCell("G" + temp).value = leaddetail[i].nextcontactby;
        worksheet.getCell("G" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("G" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("H" + temp);
        worksheet.getCell("H" + temp).value = leaddetail[i].leadtype;
        worksheet.getCell("H" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("H" + temp).alignment = {
          vertical: "middle",
          horizontal: "center",
        };

        worksheet.mergeCells("I" + temp);
        worksheet.getCell("I" + temp).value = leaddetail[i].marketsegment;
        worksheet.getCell("I" + temp).font = {
          size: 11,
          bold: true,
        };
        worksheet.getCell("I" + temp).alignment = {
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

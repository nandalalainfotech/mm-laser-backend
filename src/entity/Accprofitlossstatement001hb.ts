import { AccprofitlossstatementDTO } from "../dto/Accprofitlossstatement.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("accprofitlossstatement001hb", { schema: "erpnextgeneration5" })
export class Accprofitlossstatement001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "aplsId" })
  aplsId: number;

  @Column("varchar", { name: "company", nullable: true, length: 50 })
  company: string | null;

  @Column("varchar", { name: "periodicity", nullable: true, length: 50 })
  periodicity: string | null;

  @Column("varchar", { name: "account", nullable: true, length: 50 })
  account: string | null;

  @Column("varchar", { name: "costcenter", nullable: true, length: 50 })
  costcenter: string | null;

  @Column("varchar", { name: "projectname", nullable: true, length: 60 })
  projectname: string | null;

  @Column("decimal", { name: "jan", nullable: true, precision: 12, scale: 4 })
  jan: string | null;

  @Column("decimal", { name: "feb", nullable: true, precision: 12, scale: 4 })
  feb: string | null;

  @Column("decimal", { name: "mar", nullable: true, precision: 12, scale: 4 })
  mar: string | null;

  @Column("decimal", { name: "apr", nullable: true, precision: 12, scale: 4 })
  apr: string | null;

  @Column("decimal", { name: "may", nullable: true, precision: 12, scale: 4 })
  may: string | null;

  @Column("decimal", { name: "jun", nullable: true, precision: 12, scale: 4 })
  jun: string | null;

  @Column("decimal", { name: "jul", nullable: true, precision: 12, scale: 4 })
  jul: string | null;

  @Column("decimal", { name: "aug", nullable: true, precision: 12, scale: 4 })
  aug: string | null;

  @Column("decimal", { name: "sep", nullable: true, precision: 12, scale: 4 })
  sep: string | null;

  @Column("decimal", { name: "oct", nullable: true, precision: 12, scale: 4 })
  oct: string | null;

  @Column("decimal", { name: "nov", nullable: true, precision: 12, scale: 4 })
  nov: string | null;

  @Column("decimal", { name: "dece", nullable: true, precision: 12, scale: 4 })
  dece: string | null;

  @Column("year", { name: "startYear", nullable: true })
  startYear: number | null;

  @Column("year", { name: "endYear", nullable: true })
  endYear: number | null;

  @Column("varchar", { name: "insert_user", nullable: true, length: 40 })
  insertUser: string | null;

  @Column("datetime", { name: "insert_datetime", nullable: true })
  insertDatetime: Date | null;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(accprofitlossstatementDTO: AccprofitlossstatementDTO) {
    this.aplsId = accprofitlossstatementDTO.aplsId;
    this.company = accprofitlossstatementDTO.company;
    this.startYear = accprofitlossstatementDTO.startYear;
    this.endYear = accprofitlossstatementDTO.endYear;
    this.periodicity = accprofitlossstatementDTO.periodicity;
    this.account = accprofitlossstatementDTO.account;
    this.jan = accprofitlossstatementDTO.jan;
    this.feb = accprofitlossstatementDTO.feb;
    this.mar = accprofitlossstatementDTO.mar;
    this.apr = accprofitlossstatementDTO.apr;
    this.may = accprofitlossstatementDTO.may;
    this.jun = accprofitlossstatementDTO.jun;
    this.jul = accprofitlossstatementDTO.jul;
    this.aug = accprofitlossstatementDTO.aug;
    this.sep = accprofitlossstatementDTO.sep;
    this.oct = accprofitlossstatementDTO.oct;
    this.nov = accprofitlossstatementDTO.nov;
    this.dece = accprofitlossstatementDTO.dece;
    this.costcenter = accprofitlossstatementDTO.costcenter;
    this.projectname = accprofitlossstatementDTO.projectname;
    this.insertUser = accprofitlossstatementDTO.insertUser;
    this.insertDatetime = accprofitlossstatementDTO.insertDatetime;
    this.updatedUser = accprofitlossstatementDTO.updatedUser;
    this.updatedDatetime = accprofitlossstatementDTO.updatedDatetime;
  }
}

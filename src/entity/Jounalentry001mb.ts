import { JounalentryDTO } from "../dto/Jounalentry.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("jounalentry001mb", { schema: "erpnextgeneration5" })
export class Jounalentry001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "jeId" })
  jeId: number;

  @Column("varchar", { name: "title", length: 60 })
  title: string;

  @Column("varchar", { name: "status", length: 50 })
  status: string;

  @Column("varchar", { name: "referenceNumber", length: 50 })
  referenceNumber: string;

  @Column("varchar", { name: "jeSeries", length: 50 })
  jeSeries: string;

  @Column("varchar", { name: "accountName", length: 50 })
  accountName: string;

  @Column("varchar", { name: "partyName", length: 50 })
  partyName: string;

  @Column("varchar", { name: "docStatus", length: 50 })
  docStatus: string;

  @Column("datetime", { name: "postingDate" })
  postingDate: Date;

  @Column("datetime", { name: "referenceDate" })
  referenceDate: Date;

  @Column("int", { name: "credit" })
  credit: number;

  @Column("int", { name: "debit" })
  debit: number;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(jounalentryDTO: JounalentryDTO) {
    this.jeId = jounalentryDTO.jeId;
    this.title = jounalentryDTO.title;
    this.status = jounalentryDTO.status;
    this.referenceNumber = jounalentryDTO.referenceNumber;
    this.jeSeries = jounalentryDTO.jeSeries;
    this.postingDate = jounalentryDTO.postingDate;
    this.referenceDate = jounalentryDTO.referenceDate;
    this.accountName = jounalentryDTO.accountName;
    this.partyName = jounalentryDTO.partyName;
    this.debit = jounalentryDTO.debit;
    this.credit = jounalentryDTO.credit;
    this.docStatus = jounalentryDTO.docStatus;
    this.insertUser = jounalentryDTO.insertUser;
    this.insertDatetime = jounalentryDTO.insertDatetime;
    this.updatedUser = jounalentryDTO.updatedUser;
    this.updatedDatetime = jounalentryDTO.updatedDatetime;
}
}

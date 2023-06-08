import { PeriodclosingvoucherDTO } from "../dto/Periodclosingvoucher.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("periodclosingvoucher001hb", { schema: "erpnextgeneration5" })
export class Periodclosingvoucher001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "closingaccounthead", length: 45 })
  closingaccounthead: string;

  @Column("varchar", { name: "company", length: 45 })
  company: string;

  @Column("varchar", { name: "remarks", length: 45 })
  remarks: string;

  @Column("datetime", { name: "transactiondate" })
  transactiondate: Date;

  @Column("datetime", { name: "postingdate" })
  postingdate: Date;

  @Column("year", { name: "closingfiscalyear" })
  closingfiscalyear: number;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(periodclosingvoucherDTO: PeriodclosingvoucherDTO) {
    this.id = periodclosingvoucherDTO.id;
    this.transactiondate = periodclosingvoucherDTO.transactiondate;
    this.closingaccounthead = periodclosingvoucherDTO.closingaccounthead;
    this.postingdate = periodclosingvoucherDTO.postingdate;
    this.closingfiscalyear = periodclosingvoucherDTO.closingfiscalyear;
    this.company = periodclosingvoucherDTO.company;
    this.remarks = periodclosingvoucherDTO.remarks;
    this.insertUser = periodclosingvoucherDTO.insertUser;
    this.insertDatetime = periodclosingvoucherDTO.insertDatetime;
    this.updatedUser = periodclosingvoucherDTO.updatedUser;
    this.updatedDatetime = periodclosingvoucherDTO.updatedDatetime;
}
}

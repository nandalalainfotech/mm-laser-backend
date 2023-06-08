import { AccgenledgeDTO } from "../dto/Accgenledge.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("accgenledge001mb", { schema: "erpnextgeneration5" })
export class Accgenledge001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "accglId" })
  accglId: number;

  @Column("varchar", { name: "company", length: 50 })
  company: string;

  @Column("varchar", { name: "partyType", length: 40 })
  partyType: string;

  @Column("varchar", { name: "partyName", length: 40 })
  partyName: string;

  @Column("varchar", { name: "letterHead", length: 40 })
  letterHead: string;

  @Column("varchar", { name: "accountName", length: 60 })
  accountName: string;

  @Column("int", { name: "debit" })
  debit: number;

  @Column("int", { name: "credit" })
  credit: number;

  @Column("varchar", { name: "voucherCode", length: 50 })
  voucherCode: string;

  @Column("varchar", { name: "voucherType", length: 50 })
  voucherType: string;

  @Column("varchar", { name: "projectname", length: 50 })
  projectname: string;

  @Column("varchar", { name: "costCenter", length: 40 })
  costCenter: string;

  @Column("varchar", { name: "againvcType", length: 50 })
  againvcType: string;

  @Column("varchar", { name: "againvcName", length: 60 })
  againvcName: string;

  @Column("datetime", { name: "fromDate" })
  fromDate: Date;

  @Column("datetime", { name: "toDate" })
  toDate: Date;

  @Column("char", { name: "grpbyVoucher", nullable: true, length: 1 })
  grpbyVoucher: string | null;

  @Column("char", { name: "grobyAccount", nullable: true, length: 1 })
  grobyAccount: string | null;

  @Column("datetime", { name: "postingDate" })
  postingDate: Date;

  @Column("int", { name: "againstAmt", nullable: true })
  againstAmt: number | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(accgenledgeDTO: AccgenledgeDTO) {
    this.accglId = accgenledgeDTO.accglId;
    this.company = accgenledgeDTO.company;
    this.fromDate = accgenledgeDTO.fromDate;
    this.toDate = accgenledgeDTO.toDate;
    this.partyType = accgenledgeDTO.partyType;
    this.partyName = accgenledgeDTO.partyName;
    this.grpbyVoucher = accgenledgeDTO.grpbyVoucher;
    this.grobyAccount = accgenledgeDTO.grobyAccount;
    this.letterHead = accgenledgeDTO.letterHead;
    this.postingDate = accgenledgeDTO.postingDate;
    this.accountName = accgenledgeDTO.accountName;
    this.debit = accgenledgeDTO.debit;
    this.credit = accgenledgeDTO.credit;
    this.voucherCode = accgenledgeDTO.voucherCode;
    this.voucherType = accgenledgeDTO.voucherType;
    this.againstAmt = accgenledgeDTO.againstAmt;
    this.projectname = accgenledgeDTO.projectname;
    this.costCenter = accgenledgeDTO.costCenter;
    this.againvcType = accgenledgeDTO.againvcType;
    this.againvcName = accgenledgeDTO.againvcName;
    this.insertUser = accgenledgeDTO.insertUser;
    this.insertDatetime = accgenledgeDTO.insertDatetime;
    this.updatedUser = accgenledgeDTO.updatedUser;
    this.updatedDatetime = accgenledgeDTO.updatedDatetime;
}
}

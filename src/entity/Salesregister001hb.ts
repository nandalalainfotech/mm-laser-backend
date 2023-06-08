import { SalesregisterDTO } from "../dto/Salesregister.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("salesregister001hb", { schema: "erpnextgeneration5" })
export class Salesregister001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "regId" })
  regId: number;

  @Column("varchar", { name: "customername", length: 50 })
  customername: string;

  @Column("varchar", { name: "customergroup", length: 50 })
  customergroup: string;

  @Column("varchar", { name: "terName", length: 50 })
  terName: string;

  @Column("varchar", { name: "accountType", length: 50 })
  accountType: string;

  @Column("varchar", { name: "paymentMode", length: 50 })
  paymentMode: string;

  @Column("varchar", { name: "projectname", length: 50 })
  projectname: string;

  @Column("varchar", { name: "remarks", length: 150 })
  remarks: string;

  @Column("varchar", { name: "salesCode", length: 50 })
  salesCode: string;

  @Column("varchar", { name: "delNote", length: 50 })
  delNote: string;

  @Column("decimal", {
    name: "gainloss",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  gainloss: string | null;

  @Column("decimal", {
    name: "saleswpl",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  saleswpl: string | null;

  @Column("decimal", {
    name: "netTotal",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  netTotal: string | null;

  @Column("decimal", {
    name: "totalTax",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  totalTax: string | null;

  @Column("decimal", {
    name: "grandTotal",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  grandTotal: string | null;

  @Column("decimal", {
    name: "roundedTotal",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  roundedTotal: string | null;

  @Column("decimal", {
    name: "outstandAmt",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  outstandAmt: string | null;

  @Column("datetime", { name: "postingDate" })
  postingDate: Date;

  @Column("varchar", { name: "currency", length: 255 })
  currency: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(salesregisterDTO: SalesregisterDTO) {
    this.regId = salesregisterDTO.regId;
    this.postingDate = salesregisterDTO.postingDate;
    this.customername = salesregisterDTO.customername;
    this.customergroup = salesregisterDTO.customergroup;
    this.terName = salesregisterDTO.terName;
    this.accountType = salesregisterDTO.accountType;
    this.paymentMode = salesregisterDTO.paymentMode;
    this.projectname = salesregisterDTO.projectname;
    this.remarks = salesregisterDTO.remarks;
    this.salesCode = salesregisterDTO.salesCode;
    this.delNote = salesregisterDTO.delNote;
    this.currency = salesregisterDTO.currency;
    this.gainloss = salesregisterDTO.gainloss;
    this.saleswpl = salesregisterDTO.saleswpl;
    this.netTotal = salesregisterDTO.netTotal;
    this.totalTax = salesregisterDTO.totalTax;
    this.grandTotal = salesregisterDTO.grandTotal;
    this.roundedTotal = salesregisterDTO.roundedTotal;
    this.outstandAmt = salesregisterDTO.outstandAmt;
    this.insertUser = salesregisterDTO.insertUser;
    this.insertDatetime = salesregisterDTO.insertDatetime;
    this.updatedUser = salesregisterDTO.updatedUser;
    this.updatedDatetime = salesregisterDTO.updatedDatetime;
}
}

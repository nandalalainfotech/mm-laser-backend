import { AccountspayableDTO } from "../dto/Accountspayable.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("accountspayable001mb", { schema: "erpnextgeneration5" })
export class Accountspayable001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "supplier", length: 45 })
  supplier: string;

  @Column("varchar", { name: "suppliertype", length: 45 })
  suppliertype: string;

  @Column("varchar", { name: "vouchertype", length: 45 })
  vouchertype: string;

  @Column("varchar", { name: "vouchernumber", length: 45 })
  vouchernumber: string;

  @Column("int", { name: "invoicedamount", unsigned: true })
  invoicedamount: number;

  @Column("int", { name: "paidamount", unsigned: true })
  paidamount: number;

  @Column("int", { name: "outstandingamount", unsigned: true })
  outstandingamount: number;

  @Column("int", { name: "age", unsigned: true })
  age: number;

  @Column("int", { name: "uptothirty", unsigned: true })
  uptothirty: number;

  @Column("int", { name: "uptosixty", unsigned: true })
  uptosixty: number;

  @Column("int", { name: "uptoninety", unsigned: true })
  uptoninety: number;

  @Column("int", { name: "ninetyabove", unsigned: true })
  ninetyabove: number;

  @Column("varchar", { name: "remarks", length: 45 })
  remarks: string;

  @Column("datetime", { name: "postingdate" })
  postingdate: Date;

  @Column("datetime", { name: "duedate" })
  duedate: Date;

  @Column("int", { name: "billno" })
  billno: number;

  @Column("datetime", { name: "billdate" })
  billdate: Date;

  @Column("int", { name: "currency" })
  currency: number;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(accountspayableDTO: AccountspayableDTO) {
    this.id = accountspayableDTO.id;
    this.postingdate = accountspayableDTO.postingdate;
    this.supplier = accountspayableDTO.supplier;
    this.suppliertype = accountspayableDTO.suppliertype;
    this.vouchertype = accountspayableDTO.vouchertype;
    this.vouchernumber = accountspayableDTO.vouchernumber;
    this.duedate = accountspayableDTO.duedate;
    this.billno = accountspayableDTO.billno;
    this.billdate = accountspayableDTO.billdate;
    this.invoicedamount = accountspayableDTO.invoicedamount;
    this.paidamount = accountspayableDTO.paidamount;
    this.outstandingamount = accountspayableDTO.outstandingamount;
    this.age = accountspayableDTO.age;
    this.uptothirty = accountspayableDTO.uptothirty;
    this.uptosixty = accountspayableDTO.uptosixty;
    this.uptoninety = accountspayableDTO.uptoninety;
    this.currency = accountspayableDTO.currency;
    this.remarks = accountspayableDTO.remarks;
    this.ninetyabove = accountspayableDTO.ninetyabove;
    this.insertUser = accountspayableDTO.insertUser;
    this.insertDatetime = accountspayableDTO.insertDatetime;
    this.updatedUser = accountspayableDTO.updatedUser;
    this.updatedDatetime = accountspayableDTO.updatedDatetime;
}
}

import { AccountsreceivableDTO } from "../dto/Accountsreceivable.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("accountsreceivable001mb", { schema: "erpnextgeneration5" })
export class Accountsreceivable001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "customer", length: 45 })
  customer: string;

  @Column("varchar", { name: "vouchertype", length: 45 })
  vouchertype: string;

  @Column("varchar", { name: "voucherno", length: 45 })
  voucherno: string;

  @Column("int", { name: "invoicedamount", unsigned: true })
  invoicedamount: number;

  @Column("int", { name: "paidamount", unsigned: true })
  paidamount: number;

  @Column("int", { name: "outstandingamount" })
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

  @Column("varchar", { name: "territory", length: 45 })
  territory: string;

  @Column("varchar", { name: "remarks", length: 45 })
  remarks: string;

  @Column("datetime", { name: "postingdate" })
  postingdate: Date;

  @Column("datetime", { name: "duedate" })
  duedate: Date;

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

  setProperties(accountsreceivableDTO: AccountsreceivableDTO) {
    this.id = accountsreceivableDTO.id;
    this.postingdate = accountsreceivableDTO.postingdate;
    this.territory = accountsreceivableDTO.territory;
    this.vouchertype = accountsreceivableDTO.vouchertype;
    this.customer = accountsreceivableDTO.customer;
    this.duedate = accountsreceivableDTO.duedate;
    this.voucherno = accountsreceivableDTO.voucherno;
    this.invoicedamount = accountsreceivableDTO.invoicedamount;
    this.paidamount = accountsreceivableDTO.paidamount;
    this.outstandingamount = accountsreceivableDTO.outstandingamount;
    this.age = accountsreceivableDTO.age;
    this.uptothirty = accountsreceivableDTO.uptothirty;
    this.uptosixty = accountsreceivableDTO.uptosixty;
    this.uptoninety = accountsreceivableDTO.uptoninety;
    this.currency = accountsreceivableDTO.currency;
    this.remarks = accountsreceivableDTO.remarks;
    this.ninetyabove = accountsreceivableDTO.ninetyabove;
    this.insertUser = accountsreceivableDTO.insertUser;
    this.insertDatetime = accountsreceivableDTO.insertDatetime;
    this.updatedUser = accountsreceivableDTO.updatedUser;
    this.updatedDatetime = accountsreceivableDTO.updatedDatetime;
  }
}

import { BankreconcileDTO } from "../dto/Bankreconcile.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bankreconcile001hb", { schema: "erpnextgeneration5" })
export class Bankreconcile001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "bankrecId" })
  bankrecId: number;

  @Column("varchar", { name: "bankAccount", length: 50 })
  bankAccount: string;

  @Column("varchar", { name: "entrySeries", length: 50 })
  entrySeries: string;

  @Column("varchar", { name: "againstAccount", length: 50 })
  againstAccount: string;

  @Column("varchar", { name: "referenceName", length: 50 })
  referenceName: string;

  @Column("varchar", { name: "currency", length: 40 })
  currency: string;

  @Column("datetime", { name: "postingDate" })
  postingDate: Date;

  @Column("int", { name: "debit" })
  debit: number;

  @Column("int", { name: "credit" })
  credit: number;

  @Column("datetime", { name: "referenceDate" })
  referenceDate: Date;

  @Column("datetime", { name: "clearanceDate" })
  clearanceDate: Date;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(bankreconcileDTO: BankreconcileDTO) {
    this.bankrecId = bankreconcileDTO.bankrecId;
    this.bankAccount = bankreconcileDTO.bankAccount;
    this.postingDate = bankreconcileDTO.postingDate;
    this.entrySeries = bankreconcileDTO.entrySeries;
    this.debit = bankreconcileDTO.debit;
    this.credit = bankreconcileDTO.credit;
    this.againstAccount = bankreconcileDTO.againstAccount;
    this.referenceName = bankreconcileDTO.referenceName;
    this.referenceDate = bankreconcileDTO.referenceDate;
    this.clearanceDate = bankreconcileDTO.clearanceDate;
    this.currency = bankreconcileDTO.currency;
    this.insertUser = bankreconcileDTO.insertUser;
    this.insertDatetime = bankreconcileDTO.insertDatetime;
    this.updatedUser = bankreconcileDTO.updatedUser;
    this.updatedDatetime = bankreconcileDTO.updatedDatetime;
}
}

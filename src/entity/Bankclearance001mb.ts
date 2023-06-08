import { BankclearanceDTO } from "../dto/Bankclearance.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bankclearance001mb", { schema: "erpnextgeneration5" })
export class Bankclearance001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "bankclrId" })
  bankclrId: number;

  @Column("varchar", { name: "bankAccount", length: 50 })
  bankAccount: string;

  @Column("varchar", { name: "payDocument", length: 50 })
  payDocument: string;

  @Column("varchar", { name: "entrySeries", length: 50 })
  entrySeries: string;

  @Column("varchar", { name: "chequeref", length: 50 })
  chequeref: string;

  @Column("varchar", { name: "againstAccount", length: 50 })
  againstAccount: string;

  @Column("decimal", {
    name: "amount",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  amount: string | null;

  @Column("datetime", { name: "fromDate" })
  fromDate: Date;

  @Column("datetime", { name: "toDate" })
  toDate: Date;

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

  setProperties(bankclearanceDTO: BankclearanceDTO) {
    this.againstAccount = bankclearanceDTO.againstAccount;
    this.bankAccount = bankclearanceDTO.bankAccount;
    this.bankclrId = bankclearanceDTO.bankclrId;
    this.chequeref = bankclearanceDTO.chequeref;
    this.clearanceDate = bankclearanceDTO.clearanceDate;
    this.entrySeries = bankclearanceDTO.entrySeries;
    this.fromDate = bankclearanceDTO.fromDate;
    this.payDocument = bankclearanceDTO.payDocument;
    this.toDate = bankclearanceDTO.toDate;
    this.amount = bankclearanceDTO.amount;
    this.insertUser = bankclearanceDTO.insertUser;
    this.insertDatetime = bankclearanceDTO.insertDatetime;
    this.updatedUser = bankclearanceDTO.updatedUser;
    this.updatedDatetime = bankclearanceDTO.updatedDatetime;
}
}

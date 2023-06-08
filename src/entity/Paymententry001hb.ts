import { PaymententryDTO } from "../dto/Paymententry.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("paymententry001hb", { schema: "erpnextgeneration5" })
export class Paymententry001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "payentId" })
  payentId: number;

  @Column("varchar", { name: "entrySeries", length: 50 })
  entrySeries: string;

  @Column("varchar", { name: "paymentType", length: 50 })
  paymentType: string;

  @Column("varchar", { name: "paymentMode", length: 50 })
  paymentMode: string;

  @Column("varchar", { name: "partyType", length: 40 })
  partyType: string;

  @Column("varchar", { name: "partyName", length: 50 })
  partyName: string;

  @Column("varchar", { name: "accpaidTo", length: 50 })
  accpaidTo: string;

  @Column("datetime", { name: "postingDate" })
  postingDate: Date;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(paymententryDTO: PaymententryDTO) {
    this.payentId = paymententryDTO.payentId;
    this.entrySeries = paymententryDTO.entrySeries;
    this.postingDate = paymententryDTO.postingDate;
    this.paymentType = paymententryDTO.paymentType;
    this.paymentMode = paymententryDTO.paymentMode;
    this.partyType = paymententryDTO.partyType;
    this.partyName = paymententryDTO.partyName;
    this.accpaidTo = paymententryDTO.accpaidTo;
    this.insertUser = paymententryDTO.insertUser;
    this.insertDatetime = paymententryDTO.insertDatetime;
    this.updatedUser = paymententryDTO.updatedUser;
    this.updatedDatetime = paymententryDTO.updatedDatetime;
}
}

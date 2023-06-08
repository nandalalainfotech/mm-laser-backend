import { PaymentrequestDTO } from "../dto/Paymentrequest.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("paymentrequest001hb", { schema: "erpnextgeneration5" })
export class Paymentrequest001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "payreqId" })
  payreqId: number;

  @Column("varchar", { name: "prName", length: 50 })
  prName: string;

  @Column("varchar", { name: "status", length: 50 })
  status: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(paymentrequestDTO: PaymentrequestDTO) {
    this.payreqId = paymentrequestDTO.payreqId;
    this.prName = paymentrequestDTO.prName;
    this.status = paymentrequestDTO.status;
    this.insertUser = paymentrequestDTO.insertUser;
    this.insertDatetime = paymentrequestDTO.insertDatetime;
    this.updatedUser = paymentrequestDTO.updatedUser;
    this.updatedDatetime = paymentrequestDTO.updatedDatetime;
    this.insertUser = paymentrequestDTO.insertUser;
    this.insertDatetime = paymentrequestDTO.insertDatetime;
    this.updatedUser = paymentrequestDTO.updatedUser;
    this.updatedDatetime = paymentrequestDTO.updatedDatetime;
}
}

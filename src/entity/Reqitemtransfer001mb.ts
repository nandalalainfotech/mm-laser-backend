import { ReqitemtransferDTO } from "../dto/Reqitemtransfer.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("reqitemtransfer001mb", { schema: "erpnextgeneration5" })
export class Reqitemtransfer001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "ittransId" })
  ittransId: number;

  @Column("varchar", { name: "mrSeries", length: 50 })
  mrSeries: string;

  @Column("decimal", {
    name: "transferQty",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  transferQty: string | null;

  @Column("decimal", {
    name: "qtytoTransfer",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  qtytoTransfer: string | null;

  @Column("varchar", { name: "itemCode", length: 50 })
  itemCode: string;

  @Column("varchar", { name: "description", length: 100 })
  description: string;

  @Column("varchar", { name: "company", length: 50 })
  company: string;

  @Column("datetime", { name: "date" })
  date: Date;

  @Column("int", { name: "quantity" })
  quantity: number;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(reqitemtransferDTO: ReqitemtransferDTO) {
    this.ittransId = reqitemtransferDTO.ittransId;
    this.itemCode = reqitemtransferDTO.itemCode;
    this.mrSeries = reqitemtransferDTO.mrSeries;
    this.quantity = reqitemtransferDTO.quantity;
    this.transferQty = reqitemtransferDTO.transferQty;
    this.date = reqitemtransferDTO.date;
    this.qtytoTransfer = reqitemtransferDTO.qtytoTransfer;
    this.description = reqitemtransferDTO.description;
    this.company = reqitemtransferDTO.company;
    this.insertUser = reqitemtransferDTO.insertUser;
    this.insertDatetime = reqitemtransferDTO.insertDatetime;
    this.updatedUser = reqitemtransferDTO.updatedUser;
    this.updatedDatetime = reqitemtransferDTO.updatedDatetime;
}
}

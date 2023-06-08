import { SwsanalyticsDTO } from "../dto/Swsanalytics.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("swsanalytics001mb", { schema: "erpnextgeneration5" })
export class Swsanalytics001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "swsId" })
  swsId: number;

  @Column("varchar", { name: "itemCode", length: 50 })
  itemCode: string;

  @Column("varchar", { name: "description", nullable: true, length: 150 })
  description: string | null;

  @Column("varchar", { name: "swsUOM", length: 20 })
  swsUom: string;

  @Column("decimal", {
    name: "consAmt",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  consAmt: string | null;

  @Column("decimal", {
    name: "delAmt",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  delAmt: string | null;

  @Column("decimal", {
    name: "totalAmt",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  totalAmt: string | null;

  @Column("int", { name: "consQty" })
  consQty: number;

  @Column("int", { name: "delQty" })
  delQty: number;

  @Column("int", { name: "totalQty" })
  totalQty: number;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(swsanalyticsDTO: SwsanalyticsDTO) {
    this.swsId = swsanalyticsDTO.swsId;
    this.itemCode = swsanalyticsDTO.itemCode;
    this.description = swsanalyticsDTO.description;
    this.swsUom = swsanalyticsDTO.swsUom;
    this.consQty = swsanalyticsDTO.consQty;
    this.consAmt = swsanalyticsDTO.consAmt;
    this.delQty = swsanalyticsDTO.delQty;
    this.delAmt = swsanalyticsDTO.delAmt;
    this.totalQty = swsanalyticsDTO.totalQty;
    this.totalAmt = swsanalyticsDTO.totalAmt;
    this.insertUser = swsanalyticsDTO.insertUser;
    this.insertDatetime = swsanalyticsDTO.insertDatetime;
    this.updatedUser = swsanalyticsDTO.updatedUser;
    this.updatedDatetime = swsanalyticsDTO.updatedDatetime;
}
}

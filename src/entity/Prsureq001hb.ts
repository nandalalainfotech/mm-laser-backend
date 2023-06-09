import { PrsureqDTO } from "../dto/Prsureq.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("prsureq001hb", { schema: "erpnextgeneration5" })
export class Prsureq001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "prsrId" })
  prsrId: number;

  @Column("varchar", { name: "suSeries", length: 50 })
  suSeries: string;

  @Column("varchar", { name: "supplier", length: 40 })
  supplier: string;

  @Column("varchar", { name: "itemCode", length: 40 })
  itemCode: string;

  @Column("varchar", { name: "stockUOM", length: 20 })
  stockUom: string;

  @Column("decimal", { name: "rate", precision: 12, scale: 4 })
  rate: string;

  @Column("decimal", {
    name: "taxandChg",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  taxandChg: string | null;

  @Column("varchar", { name: "accountHead", length: 40 })
  accountHead: string;

  @Column("decimal", {
    name: "squotrate",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  squotrate: string | null;

  @Column("varchar", { name: "sutype", length: 40 })
  sutype: string;

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

  setProperties(prsureqDTO: PrsureqDTO) {
    this.prsrId = prsureqDTO.prsrId;
    this.suSeries = prsureqDTO.suSeries;
    this.date = prsureqDTO.date;
    this.supplier = prsureqDTO.supplier;
    this.itemCode = prsureqDTO.itemCode;
    this.quantity = prsureqDTO.quantity;
    this.stockUom = prsureqDTO.stockUom;
    this.rate = prsureqDTO.rate;
    this.taxandChg = prsureqDTO.taxandChg;
    this.accountHead = prsureqDTO.accountHead;
    this.squotrate = prsureqDTO.squotrate;
    this.sutype = prsureqDTO.sutype;
    this.insertUser = prsureqDTO.insertUser;
    this.insertDatetime = prsureqDTO.insertDatetime;
    this.updatedUser = prsureqDTO.updatedUser;
    this.updatedDatetime = prsureqDTO.updatedDatetime;
}
}

import { PrpurchaseordDTO } from "../dto/Prpurchaseord.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("prpurchaseord001hb", { schema: "erpnextgeneration5" })
export class Prpurchaseord001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "proId" })
  proId: number;

  @Column("varchar", { name: "poSeries", length: 40 })
  poSeries: string;

  @Column("varchar", { name: "supplier", length: 40 })
  supplier: string;

  @Column("varchar", { name: "supplyrawmat", length: 40 })
  supplyrawmat: string;

  @Column("varchar", { name: "itemCode", length: 40 })
  itemCode: string;

  @Column("decimal", { name: "rate", precision: 12, scale: 4 })
  rate: string;

  @Column("decimal", { name: "amount", precision: 12, scale: 4 })
  amount: string;

  @Column("varchar", { name: "prtype", length: 40 })
  prtype: string;

  @Column("decimal", { name: "quotrate", precision: 12, scale: 4 })
  quotrate: string;

  @Column("datetime", { name: "date" })
  date: Date;

  @Column("int", { name: "quantity" })
  quantity: number;

  @Column("int", { name: "accountHead", nullable: true })
  accountHead: number | null;

  @Column("int", { name: "taxandChg" })
  taxandChg: number;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(prpurchaseordDTO: PrpurchaseordDTO) {
    this.proId = prpurchaseordDTO.proId;
    this.poSeries = prpurchaseordDTO.poSeries;
    this.date = prpurchaseordDTO.date;
    this.supplier = prpurchaseordDTO.supplier;
    this.supplyrawmat = prpurchaseordDTO.supplyrawmat;
    this.itemCode = prpurchaseordDTO.itemCode;
    this.quantity = prpurchaseordDTO.quantity;
    this.rate = prpurchaseordDTO.rate;
    this.amount = prpurchaseordDTO.amount;
    this.prtype = prpurchaseordDTO.prtype;
    this.accountHead = prpurchaseordDTO.accountHead;
    this.quotrate = prpurchaseordDTO.quotrate;
    this.taxandChg = prpurchaseordDTO.taxandChg;
    this.insertUser = prpurchaseordDTO.insertUser;
    this.insertDatetime = prpurchaseordDTO.insertDatetime;
    this.updatedUser = prpurchaseordDTO.updatedUser;
    this.updatedDatetime = prpurchaseordDTO.updatedDatetime;
}
}

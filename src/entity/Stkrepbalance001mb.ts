import { StkrepbalanceDTO } from "../dto/Stkrepbalance.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("stkrepbalance001mb", { schema: "erpnextgeneration5" })
export class Stkrepbalance001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "stbalId" })
  stbalId: number;

  @Column("varchar", { name: "brand", nullable: true, length: 255 })
  brand: string | null;

  @Column("varchar", { name: "company", nullable: true, length: 255 })
  company: string | null;

  @Column("varchar", { name: "description", nullable: true, length: 255 })
  description: string | null;

  @Column("varchar", { name: "itemCode", nullable: true, length: 255 })
  itemCode: string | null;

  @Column("varchar", { name: "itemGroup", nullable: true, length: 255 })
  itemGroup: string | null;

  @Column("varchar", { name: "stkUOM", nullable: true, length: 255 })
  stkUom: string | null;

  @Column("varchar", { name: "wareHouse", nullable: true, length: 255 })
  wareHouse: string | null;

  @Column("int", { name: "balanceQty", nullable: true })
  balanceQty: number | null;

  @Column("int", { name: "balanceValue", nullable: true })
  balanceValue: number | null;

  @Column("int", { name: "inQty", nullable: true })
  inQty: number | null;

  @Column("int", { name: "openingQty", nullable: true })
  openingQty: number | null;

  @Column("int", { name: "openingValue", nullable: true })
  openingValue: number | null;

  @Column("int", { name: "outQty", nullable: true })
  outQty: number | null;

  @Column("int", { name: "outValue", nullable: true })
  outValue: number | null;

  @Column("int", { name: "valuationRate", nullable: true })
  valuationRate: number | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(stkrepbalanceDTO: StkrepbalanceDTO) {
    this.stbalId = stkrepbalanceDTO.stbalId;
    this.balanceQty = stkrepbalanceDTO.balanceQty;
    this.balanceValue = stkrepbalanceDTO.balanceValue;
    this.brand = stkrepbalanceDTO.brand;
    this.company = stkrepbalanceDTO.company;
    this.description = stkrepbalanceDTO.description;
    this.inQty = stkrepbalanceDTO.inQty;
    this.itemCode = stkrepbalanceDTO.itemCode;
    this.itemGroup = stkrepbalanceDTO.itemGroup;
    this.openingQty = stkrepbalanceDTO.openingQty;
    this.openingValue = stkrepbalanceDTO.openingValue;
    this.outQty = stkrepbalanceDTO.outQty;
    this.outValue = stkrepbalanceDTO.outValue;
    this.outValue = stkrepbalanceDTO.outValue;
    this.stkUom = stkrepbalanceDTO.stkUom;
    this.valuationRate = stkrepbalanceDTO.valuationRate;
    this.wareHouse = stkrepbalanceDTO.wareHouse;
    this.insertUser = stkrepbalanceDTO.insertUser;
    this.insertDatetime = stkrepbalanceDTO.insertDatetime;
    this.updatedUser = stkrepbalanceDTO.updatedUser;
    this.updatedDatetime = stkrepbalanceDTO.updatedDatetime;
}
}

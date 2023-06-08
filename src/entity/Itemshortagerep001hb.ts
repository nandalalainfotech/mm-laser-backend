import { ItemshortagerepDTO } from "../dto/Itemshortagerep.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("itemshortagerep001hb", { schema: "erpnextgeneration5" })
export class Itemshortagerep001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "shrepId" })
  shrepId: number;

  @Column("varchar", { name: "warehouseName", length: 50 })
  warehouseName: string;

  @Column("varchar", { name: "itemCode", length: 50 })
  itemCode: string;

  @Column("decimal", {
    name: "actualQty",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  actualQty: string | null;

  @Column("decimal", {
    name: "orderedQty",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  orderedQty: string | null;

  @Column("decimal", {
    name: "plannedQty",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  plannedQty: string | null;

  @Column("decimal", {
    name: "reservedQty",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  reservedQty: string | null;

  @Column("decimal", {
    name: "projectedQty",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  projectedQty: string | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(itemshortagerepDTO: ItemshortagerepDTO) {
    this.shrepId = itemshortagerepDTO.shrepId;
    this.itemCode = itemshortagerepDTO.itemCode;
    this.warehouseName = itemshortagerepDTO.warehouseName;
    this.actualQty = itemshortagerepDTO.actualQty;
    this.orderedQty = itemshortagerepDTO.orderedQty;
    this.plannedQty = itemshortagerepDTO.plannedQty;
    this.reservedQty = itemshortagerepDTO.reservedQty;
    this.projectedQty = itemshortagerepDTO.projectedQty;
    this.insertUser = itemshortagerepDTO.insertUser;
    this.insertDatetime = itemshortagerepDTO.insertDatetime;
    this.updatedUser = itemshortagerepDTO.updatedUser;
    this.updatedDatetime = itemshortagerepDTO.updatedDatetime;
}
}

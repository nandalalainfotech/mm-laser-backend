import { StkrepprojectDTO } from "../dto/Stkrepproject.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("stkrepproject001hb", { schema: "erpnextgeneration5" })
export class Stkrepproject001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "stprojId" })
  stprojId: number;

  @Column("varchar", { name: "UOM", nullable: true, length: 255 })
  uom: string | null;

  @Column("varchar", { name: "brand", nullable: true, length: 255 })
  brand: string | null;

  @Column("varchar", { name: "description", nullable: true, length: 255 })
  description: string | null;

  @Column("varchar", { name: "itemCode", nullable: true, length: 255 })
  itemCode: string | null;

  @Column("varchar", { name: "itemGroup", nullable: true, length: 255 })
  itemGroup: string | null;

  @Column("varchar", { name: "wareHouse", nullable: true, length: 255 })
  wareHouse: string | null;

  @Column("int", { name: "actualQty", nullable: true })
  actualQty: number | null;

  @Column("int", { name: "orderedQty", nullable: true })
  orderedQty: number | null;

  @Column("int", { name: "plannedQty", nullable: true })
  plannedQty: number | null;

  @Column("int", { name: "reorderQty", nullable: true })
  reorderQty: number | null;

  @Column("int", { name: "reorderValue", nullable: true })
  reorderValue: number | null;

  @Column("int", { name: "requestedQty", nullable: true })
  requestedQty: number | null;

  @Column("int", { name: "reservedQty", nullable: true })
  reservedQty: number | null;

  @Column("int", { name: "shortageQty", nullable: true })
  shortageQty: number | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(stkrepprojectDTO: StkrepprojectDTO) {
    this.stprojId = stkrepprojectDTO.stprojId;
    this.uom = stkrepprojectDTO.uom;
    this.actualQty = stkrepprojectDTO.actualQty;
    this.brand = stkrepprojectDTO.brand;
    this.description = stkrepprojectDTO.description;
    this.itemCode = stkrepprojectDTO.itemCode;
    this.itemGroup = stkrepprojectDTO.itemGroup;
    this.orderedQty = stkrepprojectDTO.orderedQty;
    this.plannedQty = stkrepprojectDTO.plannedQty;
    this.reorderQty = stkrepprojectDTO.reorderQty;
    this.reorderValue = stkrepprojectDTO.reorderValue;
    this.requestedQty = stkrepprojectDTO.requestedQty;
    this.reservedQty = stkrepprojectDTO.reservedQty;
    this.shortageQty = stkrepprojectDTO.shortageQty;
    this.wareHouse = stkrepprojectDTO.wareHouse;
    this.insertUser = stkrepprojectDTO.insertUser;
    this.insertDatetime = stkrepprojectDTO.insertDatetime;
    this.updatedUser = stkrepprojectDTO.updatedUser;
    this.updatedDatetime = stkrepprojectDTO.updatedDatetime;
}
}

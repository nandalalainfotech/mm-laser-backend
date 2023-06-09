import { ItemwiselevelDTO } from "../dto/Itemwiselevel.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("itemwiselevel001mb", { schema: "erpnextgeneration5" })
export class Itemwiselevel001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "iwlId" })
  iwlId: number;

  @Column("varchar", { name: "itemCode", length: 50 })
  itemCode: string;

  @Column("varchar", { name: "description", length: 50 })
  description: string;

  @Column("varchar", { name: "safetyStk", length: 50 })
  safetyStk: string;

  @Column("decimal", {
    name: "leadtimeDays",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  leadtimeDays: string | null;

  @Column("decimal", {
    name: "consumed",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  consumed: string | null;

  @Column("decimal", {
    name: "delivered",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  delivered: string | null;

  @Column("decimal", {
    name: "totalOutgoing",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  totalOutgoing: string | null;

  @Column("decimal", {
    name: "avgdailyOutgoing",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  avgdailyOutgoing: string | null;

  @Column("varchar", { name: "reorderLevel", length: 50 })
  reorderLevel: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(itemwiselevelDTO: ItemwiselevelDTO) {
    this.iwlId = itemwiselevelDTO.iwlId;
    this.itemCode = itemwiselevelDTO.itemCode;
    this.description = itemwiselevelDTO.description;
    this.safetyStk = itemwiselevelDTO.safetyStk;
    this.leadtimeDays = itemwiselevelDTO.leadtimeDays;
    this.consumed = itemwiselevelDTO.consumed;
    this.delivered = itemwiselevelDTO.delivered;
    this.totalOutgoing = itemwiselevelDTO.totalOutgoing;
    this.avgdailyOutgoing = itemwiselevelDTO.avgdailyOutgoing;
    this.reorderLevel = itemwiselevelDTO.reorderLevel;
    this.insertUser = itemwiselevelDTO.insertUser;
    this.insertDatetime = itemwiselevelDTO.insertDatetime;
    this.updatedUser = itemwiselevelDTO.updatedUser;
    this.updatedDatetime = itemwiselevelDTO.updatedDatetime;
}
}

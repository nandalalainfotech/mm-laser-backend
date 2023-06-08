import { OrditemsdeliverDTO } from "../dto/Orditemsdeliver.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("orditemsdeliver001hb", { schema: "erpnextgeneration5" })
export class Orditemsdeliver001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "orditemsId" })
  orditemsId: number;

  @Column("varchar", { name: "sorderName", length: 50 })
  sorderName: string;

  @Column("varchar", { name: "customername", length: 50 })
  customername: string;

  @Column("varchar", { name: "projectName", nullable: true, length: 50 })
  projectName: string | null;

  @Column("decimal", { name: "rate", nullable: true, precision: 12, scale: 4 })
  rate: string | null;

  @Column("decimal", {
    name: "amount",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  amount: string | null;

  @Column("decimal", {
    name: "amttoDeliver",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  amttoDeliver: string | null;

  @Column("varchar", { name: "availableQty", length: 50 })
  availableQty: string;

  @Column("varchar", { name: "projectedQty", nullable: true, length: 40 })
  projectedQty: string | null;

  @Column("varchar", { name: "expectedQty", nullable: true, length: 40 })
  expectedQty: string | null;

  @Column("varchar", { name: "itemCode", length: 60 })
  itemCode: string;

  @Column("varchar", { name: "description", length: 100 })
  description: string;

  @Column("varchar", { name: "itemGroup", length: 50 })
  itemGroup: string;

  @Column("varchar", { name: "warehouseName", length: 50 })
  warehouseName: string;

  @Column("datetime", { name: "date" })
  date: Date;

  @Column("int", { name: "quantity" })
  quantity: number;

  @Column("int", { name: "deliverQty" })
  deliverQty: number;

  @Column("int", { name: "qtytoDeliver" })
  qtytoDeliver: number;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(orditemsdeliverDTO: OrditemsdeliverDTO) {
    this.orditemsId = orditemsdeliverDTO.orditemsId;
    this.itemCode = orditemsdeliverDTO.itemCode;
    this.sorderName = orditemsdeliverDTO.sorderName;
    this.customername = orditemsdeliverDTO.customername;
    this.date = orditemsdeliverDTO.date;
    this.projectName = orditemsdeliverDTO.projectName;
    this.quantity = orditemsdeliverDTO.quantity;
    this.deliverQty = orditemsdeliverDTO.deliverQty;
    this.qtytoDeliver = orditemsdeliverDTO.qtytoDeliver;
    this.rate = orditemsdeliverDTO.rate;
    this.amount = orditemsdeliverDTO.amount;
    this.amttoDeliver = orditemsdeliverDTO.amttoDeliver;
    this.availableQty = orditemsdeliverDTO.availableQty;
    this.projectedQty = orditemsdeliverDTO.projectedQty;
    this.expectedQty = orditemsdeliverDTO.expectedQty;
    this.description = orditemsdeliverDTO.description;
    this.itemGroup = orditemsdeliverDTO.itemGroup;
    this.warehouseName = orditemsdeliverDTO.warehouseName;
    this.insertUser = orditemsdeliverDTO.insertUser;
    this.insertDatetime = orditemsdeliverDTO.insertDatetime;
    this.updatedUser = orditemsdeliverDTO.updatedUser;
    this.updatedDatetime = orditemsdeliverDTO.updatedDatetime;
    this.insertUser = orditemsdeliverDTO.insertUser;
    this.insertDatetime = orditemsdeliverDTO.insertDatetime;
    this.updatedUser = orditemsdeliverDTO.updatedUser;
    this.updatedDatetime = orditemsdeliverDTO.updatedDatetime;
}
}

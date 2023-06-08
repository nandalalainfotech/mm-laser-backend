import { WarehouseDTO } from "../dto/Warehouse.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("warehouse001hb", { schema: "erpnextgeneration5" })
export class Warehouse001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "whId" })
  whId: number;

  @Column("varchar", { name: "warehouseName", length: 50 })
  warehouseName: string;

  @Column("varchar", { name: "status", length: 50 })
  status: string;

  @Column("varchar", { name: "isActive", length: 20 })
  isActive: string;

  @Column("varchar", { name: "warehouseCode", length: 60 })
  warehouseCode: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(warehouseDTO: WarehouseDTO) {
    this.whId = warehouseDTO.whId;
    this.warehouseName = warehouseDTO.warehouseName;
    this.status = warehouseDTO.status;
    this.isActive = warehouseDTO.isActive;
    this.warehouseCode = warehouseDTO.warehouseCode;
    this.insertUser = warehouseDTO.insertUser;
    this.insertDatetime = warehouseDTO.insertDatetime;
    this.updatedUser = warehouseDTO.updatedUser;
    this.updatedDatetime = warehouseDTO.updatedDatetime;
}
}

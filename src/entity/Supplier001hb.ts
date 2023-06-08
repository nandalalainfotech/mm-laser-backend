import { SupplierDTO } from "../dto/Supplier.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("supplier001hb", { schema: "erpnextgeneration5" })
export class Supplier001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "supId" })
  supId: number;

  @Column("varchar", { name: "supName", length: 50 })
  supName: string;

  @Column("varchar", { name: "addType", length: 50 })
  addType: string;

  @Column("varchar", { name: "supCity", length: 50 })
  supCity: string;

  @Column("varchar", { name: "supAddress", length: 100 })
  supAddress: string;

  @Column("varchar", { name: "supPhone", nullable: true, length: 15 })
  supPhone: string | null;

  @Column("varchar", { name: "supCountry", length: 50 })
  supCountry: string;

  @Column("varchar", { name: "supState", length: 50 })
  supState: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(supplierDTO: SupplierDTO) {
    this.supId = supplierDTO.supId;
    this.supName = supplierDTO.supName;
    this.addType = supplierDTO.addType;
    this.supCity = supplierDTO.supCity;
    this.supAddress = supplierDTO.supAddress;
    this.supPhone = supplierDTO.supPhone;
    this.supCountry = supplierDTO.supCountry;
    this.supState = supplierDTO.supState;
    this.insertUser = supplierDTO.insertUser;
    this.insertDatetime = supplierDTO.insertDatetime;
    this.updatedUser = supplierDTO.updatedUser;
    this.updatedDatetime = supplierDTO.updatedDatetime;
}
}

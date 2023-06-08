import { CrmspcustDTO } from "../dto/Crmspcust.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("crmspcust001mb", { schema: "erpnextgeneration5" })
export class Crmspcust001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "custId" })
  custId: number;

  @Column("varchar", { name: "customername", length: 50 })
  customername: string;

  @Column("varchar", { name: "status", nullable: true, length: 30 })
  status: string | null;

  @Column("varchar", { name: "customergroup", nullable: true, length: 50 })
  customergroup: string | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(crmspcustDTO: CrmspcustDTO) {
    this.custId = crmspcustDTO.custId;
    this.customername = crmspcustDTO.customername;
    this.status = crmspcustDTO.status;
    this.customergroup = crmspcustDTO.customergroup;
    this.insertUser = crmspcustDTO.insertUser;
    this.insertDatetime = crmspcustDTO.insertDatetime;
    this.updatedUser = crmspcustDTO.updatedUser;
    this.updatedDatetime = crmspcustDTO.updatedDatetime;
}
}

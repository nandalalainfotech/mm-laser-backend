import { FiscalyearDTO } from "../dto/Fiscalyear.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("fiscalyear001mb", { schema: "erpnextgeneration5" })
export class Fiscalyear001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "yearId" })
  yearId: number;

  @Column("varchar", { name: "yearName", length: 20 })
  yearName: string;

  @Column("varchar", { name: "status", length: 50 })
  status: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(fiscalyearDTO: FiscalyearDTO) {
    this.yearId = fiscalyearDTO.yearId;
    this.yearName = fiscalyearDTO.yearName;
    this.status = fiscalyearDTO.status;
    this.insertUser = fiscalyearDTO.insertUser;
    this.insertDatetime = fiscalyearDTO.insertDatetime;
    this.updatedUser = fiscalyearDTO.updatedUser;
    this.updatedDatetime = fiscalyearDTO.updatedDatetime;
}
}

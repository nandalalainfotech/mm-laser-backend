import { SupstatusDTO } from "../dto/Supstatus.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("supstatus001hb", { schema: "erpnextgeneration5" })
export class Supstatus001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "sustatusId" })
  sustatusId: number;

  @Column("varchar", { name: "supName", length: 50 })
  supName: string;

  @Column("varchar", { name: "sustatus", length: 50 })
  sustatus: string;

  @Column("varchar", { name: "phone", nullable: true, length: 15 })
  phone: string | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(supstatusDTO: SupstatusDTO) {
    this.sustatusId = supstatusDTO.sustatusId;
    this.supName = supstatusDTO.supName;
    this.sustatus = supstatusDTO.sustatus;
    this.phone = supstatusDTO.phone;
    this.insertUser = supstatusDTO.insertUser;
    this.insertDatetime = supstatusDTO.insertDatetime;
    this.updatedUser = supstatusDTO.updatedUser;
    this.updatedDatetime = supstatusDTO.updatedDatetime;
}
}

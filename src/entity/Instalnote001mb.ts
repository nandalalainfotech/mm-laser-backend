import { InstalnoteDTO } from "../dto/Instalnote.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("instalnote001mb", { schema: "erpnextgeneration5" })
export class Instalnote001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "instId" })
  instId: number;

  @Column("varchar", { name: "name", length: 50 })
  name: string;

  @Column("varchar", { name: "status", length: 40 })
  status: string;

  @Column("varchar", { name: "remark", length: 100 })
  remark: string;

  @Column("varchar", { name: "instCode", length: 40 })
  instCode: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  
  setProperties(instalnoteDTO: InstalnoteDTO) {
    this.instId = instalnoteDTO.instId;
    this.name = instalnoteDTO.name;
    this.status = instalnoteDTO.status;
    this.remark = instalnoteDTO.remark;
    this.instCode = instalnoteDTO.instCode;
    this.insertUser = instalnoteDTO.insertUser;
    this.insertDatetime = instalnoteDTO.insertDatetime;
    this.updatedUser = instalnoteDTO.updatedUser;
    this.updatedDatetime = instalnoteDTO.updatedDatetime;
}
}

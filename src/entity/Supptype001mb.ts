import { SupptypeDTO } from "../dto/Supptype.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("supptype001mb", { schema: "erpnextgeneration5" })
export class Supptype001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "sutypeId" })
  sutypeId: number;

  @Column("varchar", { name: "supName", length: 50 })
  supName: string;

  @Column("varchar", { name: "suType", length: 50 })
  suType: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(supptypeDTO: SupptypeDTO) {
    this.sutypeId = supptypeDTO.sutypeId;
    this.supName = supptypeDTO.supName;
    this.suType = supptypeDTO.suType;
    this.insertUser = supptypeDTO.insertUser;
    this.insertDatetime = supptypeDTO.insertDatetime;
    this.updatedUser = supptypeDTO.updatedUser;
    this.updatedDatetime = supptypeDTO.updatedDatetime;
}
}

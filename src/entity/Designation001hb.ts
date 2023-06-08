import { DesignationDTO } from "../dto/Designation.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("designation001hb", { schema: "erpnextgeneration5" })
export class Designation001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "designId" })
  designId: number;

  @Column("varchar", { name: "designation", length: 30 })
  designation: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(designationDTO: DesignationDTO) {
    this.designId = designationDTO.designId;
    this.designation = designationDTO.designation;
    this.insertUser = designationDTO.insertUser;
    this.insertDatetime = designationDTO.insertDatetime;
    this.updatedUser = designationDTO.updatedUser;
    this.updatedDatetime = designationDTO.updatedDatetime;
}
}

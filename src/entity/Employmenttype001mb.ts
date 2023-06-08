import { EmploymenttypeDTO } from "../dto/Employmenttype.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("employmenttype001mb", { schema: "erpnextgeneration5" })
export class Employmenttype001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "etypeId" })
  etypeId: number;

  @Column("varchar", { name: "employmentType", nullable: true, length: 255 })
  employmentType: string | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  
  setProperties(employmenttypeDTO: EmploymenttypeDTO) {
    this.etypeId = employmenttypeDTO.etypeId;
    this.employmentType = employmenttypeDTO.employmentType;
    this.insertUser = employmenttypeDTO.insertUser;
    this.insertDatetime = employmenttypeDTO.insertDatetime;
    this.updatedUser = employmenttypeDTO.updatedUser;
    this.updatedDatetime = employmenttypeDTO.updatedDatetime;
}
}

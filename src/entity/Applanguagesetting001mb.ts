import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User001mb } from "./User001mb";
import { ApplanguagesettingDTO } from "src/dto/Applanguagesetting.dto";

@Entity("applanguagesetting001mb", { schema: "erpnextgeneration5" })
export class Applanguagesetting001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 50 })
  name: string | null;

  @Column("varchar", { name: "description", nullable: true, length: 50 })
  description: string | null;

  @Column("char", { name: "status", nullable: true, length: 1 })
  status: string | null;

  @Column("varchar", { name: "insert_user", nullable: true, length: 40 })
  insertUser: string | null;

  @Column("datetime", { name: "insert_datetime", nullable: true })
  insertDatetime: Date | null;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;


  setProperties(applanguagesettingDTO: ApplanguagesettingDTO) {
    this.id = applanguagesettingDTO.id;
    this.name = applanguagesettingDTO.name;
    this.description = applanguagesettingDTO.description;
    this.status = applanguagesettingDTO.status;
    this.insertUser = applanguagesettingDTO.insertUser;
    this.insertDatetime = applanguagesettingDTO.insertDatetime;
    this.updatedUser = applanguagesettingDTO.updatedUser;
    this.updatedDatetime = applanguagesettingDTO.updatedDatetime;
  }
}

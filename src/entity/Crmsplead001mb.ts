import { CrmspleadDTO } from "../dto/Crmsplead.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("crmsplead001mb", { schema: "erpnextgeneration5" })
export class Crmsplead001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "slineId" })
  slineId: number;

  @Column("varchar", { name: "personName", length: 50 })
  personName: string;

  @Column("varchar", { name: "orgName", length: 50 })
  orgName: string;

  @Column("varchar", { name: "status", nullable: true, length: 50 })
  status: string | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(crmspleadDTO: CrmspleadDTO) {
    this.slineId = crmspleadDTO.slineId;
    this.personName = crmspleadDTO.personName;
    this.orgName = crmspleadDTO.orgName;
    this.status = crmspleadDTO.status;
    this.insertUser = crmspleadDTO.insertUser;
    this.insertDatetime = crmspleadDTO.insertDatetime;
    this.updatedUser = crmspleadDTO.updatedUser;
    this.updatedDatetime = crmspleadDTO.updatedDatetime;
}
}

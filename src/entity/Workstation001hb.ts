import { WorkstationDTO } from "../dto/Workstation.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("workstation001hb", { schema: "erpnextgeneration5" })
export class Workstation001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "workstId" })
  workstId: number;

  @Column("varchar", { name: "workstName", length: 40 })
  workstName: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(workstationDTO: WorkstationDTO) {
    this.workstId = workstationDTO.workstId;
    this.workstName = workstationDTO.workstName;
    this.insertUser = workstationDTO.insertUser;
    this.insertDatetime = workstationDTO.insertDatetime;
    this.updatedUser = workstationDTO.updatedUser;
    this.updatedDatetime = workstationDTO.updatedDatetime;
}
}

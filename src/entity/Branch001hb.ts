import { BranchDTO } from "../dto/Branch.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("branch001hb", { schema: "erpnextgeneration5" })
export class Branch001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "branchId" })
  branchId: number;

  @Column("varchar", { name: "branchName", length: 30 })
  branchName: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  
  setProperties(branchDTO: BranchDTO) {
    this.branchId = branchDTO.branchId;
    this.branchName = branchDTO.branchName;
    this.insertUser = branchDTO.insertUser;
    this.insertDatetime = branchDTO.insertDatetime;
    this.updatedUser = branchDTO.updatedUser;
    this.updatedDatetime = branchDTO.updatedDatetime;
}
}

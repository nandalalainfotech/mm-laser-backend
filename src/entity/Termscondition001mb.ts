import { TermsconditionDTO } from "../dto/Termscondition.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("termscondition001mb", { schema: "erpnextgeneration5" })
export class Termscondition001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "tcId" })
  tcId: number;

  @Column("varchar", { name: "tcName", length: 50 })
  tcName: string;

  @Column("varchar", { name: "status", length: 50 })
  status: string;

  @Column("varchar", { name: "terms", length: 200 })
  terms: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(termsconditionDTO: TermsconditionDTO) {
    this.tcId = termsconditionDTO.tcId;
    this.tcName = termsconditionDTO.tcName;
    this.status = termsconditionDTO.status;
    this.terms = termsconditionDTO.terms;
    this.insertUser = termsconditionDTO.insertUser;
    this.insertDatetime = termsconditionDTO.insertDatetime;
    this.updatedUser = termsconditionDTO.updatedUser;
    this.updatedDatetime = termsconditionDTO.updatedDatetime;
}
}

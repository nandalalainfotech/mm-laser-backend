import { CommunicationDTO } from "../dto/Communication.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("communication001mb", { schema: "erpnextgeneration5" })
export class Communication001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "commId" })
  commId: number;

  @Column("varchar", { name: "subject", length: 50 })
  subject: string;

  @Column("varchar", { name: "status", nullable: true, length: 20 })
  status: string | null;

  @Column("varchar", { name: "sentrec", nullable: true, length: 20 })
  sentrec: string | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(communicationDTO: CommunicationDTO) {
    this.commId = communicationDTO.commId;
    this.subject = communicationDTO.subject;
    this.sentrec = communicationDTO.sentrec;
    this.status = communicationDTO.status;
    this.insertUser = communicationDTO.insertUser;
    this.insertDatetime = communicationDTO.insertDatetime;
    this.updatedUser = communicationDTO.updatedUser;
    this.updatedDatetime = communicationDTO.updatedDatetime;
}
}

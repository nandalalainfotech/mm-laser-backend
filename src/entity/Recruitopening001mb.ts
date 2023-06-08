import { RecruitopeningDTO } from "../dto/Recruitopening.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("recruitopening001mb", { schema: "erpnextgeneration5" })
export class Recruitopening001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "jobId" })
  jobId: number;

  @Column("varchar", { name: "jobName", length: 40 })
  jobName: string;

  @Column("varchar", { name: "status", length: 30 })
  status: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(recruitopeningDTO: RecruitopeningDTO) {
    this.jobId = recruitopeningDTO.jobId;
    this.jobName = recruitopeningDTO.jobName;
    this.status = recruitopeningDTO.status;
    this.insertUser = recruitopeningDTO.insertUser;
    this.insertDatetime = recruitopeningDTO.insertDatetime;
    this.updatedUser = recruitopeningDTO.updatedUser;
    this.updatedDatetime = recruitopeningDTO.updatedDatetime;
}
}

import { ProcessprDTO } from "../dto/Processpr.dto";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("sNo", ["sNo"], {})
@Entity("processpr001mb", { schema: "erpnextgeneration5" })
export class Processpr001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "processId" })
  processId: number;

  @Column("int", { name: "sNo", nullable: true })
  sNo: number | null;

  @Column("int", { name: "month" })
  month: number;

  @Column("varchar", { name: "deptName", nullable: true, length: 255 })
  deptName: string | null;

  @Column("varchar", { name: "empCompany", nullable: true, length: 255 })
  empCompany: string | null;

  @Column("year", { name: "year" })
  year: number;

  @Column("datetime", { name: "postingDate" })
  postingDate: Date;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(processprDTO: ProcessprDTO) {
    this.processId = processprDTO.processId;
    this.sNo = processprDTO.sNo;
    this.year = processprDTO.year;
    this.month = processprDTO.month;
    this.postingDate = processprDTO.postingDate;
    this.deptName = processprDTO.deptName;
    this.empCompany = processprDTO.empCompany;
    this.insertUser = processprDTO.insertUser;
    this.insertDatetime = processprDTO.insertDatetime;
    this.updatedUser = processprDTO.updatedUser;
    this.updatedDatetime = processprDTO.updatedDatetime;
}
}

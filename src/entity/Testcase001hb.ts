import { TestcaseDTO } from "../dto/Testcase.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("testcase001hb", { schema: "erpnextgeneration5" })
export class Testcase001hb {
  @PrimaryGeneratedColumn({ type: "bigint", name: "ID" })
  id: string;

  @Column("varchar", { name: "ASSIGNTO", length: 255 })
  assignto: string;

  @Column("varchar", { name: "AUTOMATED", length: 255 })
  automated: string;

  @Column("datetime", { name: "DATEUPDATED" })
  dateupdated: Date;

  @Column("varchar", { name: "EXECTYPE", length: 255 })
  exectype: string;

  @Column("varchar", { name: "FOLDERNAME", length: 255 })
  foldername: string;

  @Column("varchar", { name: "LSTRNBY", length: 255 })
  lstrnby: string;

  @Column("datetime", { name: "LSTRNDATE" })
  lstrndate: Date;

  @Column("varchar", { name: "LSTRNRELEASE", length: 255 })
  lstrnrelease: string;

  @Column("varchar", { name: "LSTRNSTATUS", length: 255 })
  lstrnstatus: string;

  @Column("varchar", { name: "LSTRNTESTSET", length: 255 })
  lstrntestset: string;

  @Column("varchar", { name: "ORIGINALID", length: 255 })
  originalid: string;

  @Column("varchar", { name: "OWNER", length: 255 })
  owner: string;

  @Column("varchar", { name: "PRIORITY", nullable: true, length: 255 })
  priority: string | null;

  @Column("varchar", { name: "REVIEWED", length: 255 })
  reviewed: string;

  @Column("varchar", { name: "RNBYHOST", length: 255 })
  rnbyhost: string;

  @Column("varchar", { name: "RUNTIME", length: 255 })
  runtime: string;

  @Column("varchar", { name: "STATUS", length: 255 })
  status: string;

  @Column("varchar", { name: "TESTTYPE", length: 255 })
  testtype: string;

  @Column("varchar", { name: "TITLE", length: 255 })
  title: string;

  @Column("varchar", { name: "VERSION", length: 255 })
  version: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(testcaseDTO: TestcaseDTO) {
    this.id = testcaseDTO.id;
    this.assignto = testcaseDTO.assignto;
    this.automated = testcaseDTO.automated;
    this.dateupdated = testcaseDTO.dateupdated;
    this.exectype = testcaseDTO.exectype;
    this.foldername = testcaseDTO.foldername;
    this.lstrnby = testcaseDTO.lstrnby;
    this.lstrndate = testcaseDTO.lstrndate;
    this.lstrnrelease = testcaseDTO.lstrnrelease;
    this.lstrnstatus = testcaseDTO.lstrnstatus;
    this.lstrntestset = testcaseDTO.lstrntestset;
    this.originalid = testcaseDTO.originalid;
    this.owner = testcaseDTO.owner;
    this.priority = testcaseDTO.priority;
    this.reviewed = testcaseDTO.reviewed;
    this.rnbyhost = testcaseDTO.rnbyhost;
    this.runtime = testcaseDTO.runtime;
    this.status = testcaseDTO.status;
    this.testtype = testcaseDTO.testtype;
    this.title = testcaseDTO.title;
    this.version = testcaseDTO.version;
    this.insertUser = testcaseDTO.insertUser;
    this.insertDatetime = testcaseDTO.insertDatetime;
    this.updatedUser = testcaseDTO.updatedUser;
    this.updatedDatetime = testcaseDTO.updatedDatetime;
}
}

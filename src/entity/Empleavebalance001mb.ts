import { EmpleavebalanceDTO } from "../dto/Empleavebalance.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("empleavebalance001mb", { schema: "erpnextgeneration5" })
export class Empleavebalance001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "elbId" })
  elbId: number;

  @Column("varchar", { name: "branch", nullable: true, length: 255 })
  branch: string | null;

  @Column("varchar", { name: "clTaken", nullable: true, length: 255 })
  clTaken: string | null;

  @Column("varchar", { name: "company", nullable: true, length: 255 })
  company: string | null;

  @Column("varchar", { name: "compoffTaken", nullable: true, length: 255 })
  compoffTaken: string | null;

  @Column("varchar", { name: "deptName", nullable: true, length: 255 })
  deptName: string | null;

  @Column("varchar", { name: "empName", nullable: true, length: 255 })
  empName: string | null;

  @Column("varchar", { name: "empNumber", nullable: true, length: 255 })
  empNumber: string | null;

  @Column("varchar", { name: "lvwoutpayTaken", nullable: true, length: 255 })
  lvwoutpayTaken: string | null;

  @Column("varchar", { name: "plTaken", nullable: true, length: 255 })
  plTaken: string | null;

  @Column("varchar", { name: "slTaken", nullable: true, length: 255 })
  slTaken: string | null;

  @Column("int", { name: "clBalance", nullable: true })
  clBalance: number | null;

  @Column("int", { name: "compoffBalance", nullable: true })
  compoffBalance: number | null;

  @Column("datetime", { name: "fromDate", nullable: true })
  fromDate: Date | null;

  @Column("int", { name: "lvwoutpayBalance", nullable: true })
  lvwoutpayBalance: number | null;

  @Column("int", { name: "plBalance", nullable: true })
  plBalance: number | null;

  @Column("int", { name: "slBalance", nullable: true })
  slBalance: number | null;

  @Column("datetime", { name: "toDate", nullable: true })
  toDate: Date | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(empleavebalanceDTO: EmpleavebalanceDTO) {
    this.elbId = empleavebalanceDTO.elbId;
    this.branch = empleavebalanceDTO.branch;
    this.clBalance = empleavebalanceDTO.clBalance;
    this.clTaken = empleavebalanceDTO.clTaken;
    this.company = empleavebalanceDTO.company;
    this.compoffBalance = empleavebalanceDTO.compoffBalance;
    this.compoffTaken = empleavebalanceDTO.compoffTaken;
    this.deptName = empleavebalanceDTO.deptName;
    this.empName = empleavebalanceDTO.empName;
    this.empNumber = empleavebalanceDTO.empNumber;
    this.fromDate = empleavebalanceDTO.fromDate;
    this.lvwoutpayBalance = empleavebalanceDTO.lvwoutpayBalance;
    this.lvwoutpayTaken = empleavebalanceDTO.lvwoutpayTaken;
    this.plTaken = empleavebalanceDTO.plTaken;
    this.plBalance = empleavebalanceDTO.plBalance;
    this.slBalance = empleavebalanceDTO.slBalance;
    this.slTaken = empleavebalanceDTO.slTaken;
    this.toDate = empleavebalanceDTO.toDate;
    this.insertUser = empleavebalanceDTO.insertUser;
    this.insertDatetime = empleavebalanceDTO.insertDatetime;
    this.updatedUser = empleavebalanceDTO.updatedUser;
    this.updatedDatetime = empleavebalanceDTO.updatedDatetime;
  }
}

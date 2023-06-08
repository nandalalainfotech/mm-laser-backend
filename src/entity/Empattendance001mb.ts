import { EmpattendanceDTO } from "../dto/Empattendance.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("empattendance001mb", { schema: "erpnextgeneration5" })
export class Empattendance001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("varchar", { name: "clTaken", nullable: true, length: 255 })
  clTaken: string | null;

  @Column("varchar", { name: "compoffTaken", nullable: true, length: 255 })
  compoffTaken: string | null;

  @Column("varchar", { name: "deptName", nullable: true, length: 255 })
  deptName: string | null;

  @Column("varchar", { name: "empName", nullable: true, length: 255 })
  empName: string | null;

  @Column("varchar", { name: "empNumber", nullable: true, length: 255 })
  empNumber: string | null;

  @Column("varchar", { name: "lwtoutpTaken", nullable: true, length: 255 })
  lwtoutpTaken: string | null;

  @Column("varchar", { name: "mtlvTaken", nullable: true, length: 255 })
  mtlvTaken: string | null;

  @Column("varchar", { name: "ptyTaken", nullable: true, length: 255 })
  ptyTaken: string | null;

  @Column("varchar", { name: "pvglvTaken", nullable: true, length: 255 })
  pvglvTaken: string | null;

  @Column("varchar", { name: "sklvTaken", nullable: true, length: 255 })
  sklvTaken: string | null;

  @Column("varchar", { name: "vcTaken", nullable: true, length: 255 })
  vcTaken: string | null;

  @Column("int", { name: "clBalance", nullable: true })
  clBalance: number | null;

  @Column("int", { name: "compoffBalance", nullable: true })
  compoffBalance: number | null;

  @Column("int", { name: "lwtoutpBalance", nullable: true })
  lwtoutpBalance: number | null;

  @Column("int", { name: "mtlvBalance", nullable: true })
  mtlvBalance: number | null;

  @Column("int", { name: "ptyBalance", nullable: true })
  ptyBalance: number | null;

  @Column("int", { name: "pvglvBalance", nullable: true })
  pvglvBalance: number | null;

  @Column("int", { name: "sklvBalance", nullable: true })
  sklvBalance: number | null;

  @Column("int", { name: "vcBalance", nullable: true })
  vcBalance: number | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(empattendanceDTO: EmpattendanceDTO) {
    this.id = empattendanceDTO.id;
    this.clBalance = empattendanceDTO.clBalance;
    this.clTaken = empattendanceDTO.clTaken;
    this.compoffBalance = empattendanceDTO.compoffBalance;
    this.compoffTaken = empattendanceDTO.compoffTaken;
    this.deptName = empattendanceDTO.deptName;
    this.empName = empattendanceDTO.empName;
    this.empNumber = empattendanceDTO.empNumber;
    this.lwtoutpBalance = empattendanceDTO.lwtoutpBalance;
    this.lwtoutpTaken = empattendanceDTO.lwtoutpTaken;
    this.mtlvBalance = empattendanceDTO.mtlvBalance;
    this.mtlvTaken = empattendanceDTO.mtlvTaken;
    this.ptyBalance = empattendanceDTO.ptyBalance;
    this.ptyTaken = empattendanceDTO.ptyTaken;
    this.pvglvBalance = empattendanceDTO.pvglvBalance;
    this.pvglvTaken = empattendanceDTO.pvglvTaken;
    this.sklvBalance = empattendanceDTO.sklvBalance;
    this.sklvTaken = empattendanceDTO.sklvTaken;
    this.vcBalance = empattendanceDTO.vcBalance;
    this.vcTaken = empattendanceDTO.vcTaken;
    this.insertUser = empattendanceDTO.insertUser;
    this.insertDatetime = empattendanceDTO.insertDatetime;
    this.updatedUser = empattendanceDTO.updatedUser;
    this.updatedDatetime = empattendanceDTO.updatedDatetime;
}
}

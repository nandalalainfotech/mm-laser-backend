import { InactivecustDTO } from "../dto/Inactivecust.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("inactivecust001mb", { schema: "erpnextgeneration5" })
export class Inactivecust001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "inactcustId" })
  inactcustId: number;

  @Column("varchar", { name: "custType", length: 50 })
  custType: string;

  @Column("varchar", { name: "customername", length: 50 })
  customername: string;

  @Column("varchar", { name: "terName", length: 50 })
  terName: string;

  @Column("varchar", { name: "customergroup", length: 50 })
  customergroup: string;

  @Column("varchar", { name: "numoforder", length: 20 })
  numoforder: string;

  @Column("varchar", { name: "totalordval", nullable: true, length: 30 })
  totalordval: string | null;

  @Column("varchar", { name: "totalordcons", nullable: true, length: 40 })
  totalordcons: string | null;

  @Column("decimal", {
    name: "lastordamt",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  lastordamt: string | null;

  @Column("datetime", { name: "daysinlstord", nullable: true })
  daysinlstord: Date | null;

  @Column("datetime", { name: "lastorddate", nullable: true })
  lastorddate: Date | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  
  setProperties(inactivecustDTO: InactivecustDTO) {
    this.inactcustId = inactivecustDTO.inactcustId;
    this.custType = inactivecustDTO.custType;
    this.customername = inactivecustDTO.customername;
    this.terName = inactivecustDTO.terName;
    this.customergroup = inactivecustDTO.customergroup;
    this.customername = inactivecustDTO.customername;
    this.numoforder = inactivecustDTO.numoforder;
    this.totalordcons = inactivecustDTO.numoforder;
    this.lastordamt = inactivecustDTO.lastordamt;
    this.lastorddate = inactivecustDTO.lastorddate;
    this.daysinlstord = inactivecustDTO.daysinlstord;
    this.totalordval = inactivecustDTO.totalordval;
    this.insertUser = inactivecustDTO.insertUser;
    this.insertDatetime = inactivecustDTO.insertDatetime;
    this.updatedUser = inactivecustDTO.updatedUser;
    this.updatedDatetime = inactivecustDTO.updatedDatetime;
}
}

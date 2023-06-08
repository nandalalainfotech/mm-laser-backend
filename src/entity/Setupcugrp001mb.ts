import { SetupcugrpDTO } from "../dto/Setupcugrp.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("setupcugrp001mb", { schema: "erpnextgeneration5" })
export class Setupcugrp001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "cugrpId" })
  cugrpId: number;

  @Column("varchar", { name: "customergroup", length: 40 })
  customergroup: string;

  @Column("varchar", { name: "salesPerson", length: 40 })
  salesPerson: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(setupcugrpDTO: SetupcugrpDTO) {
    this.cugrpId = setupcugrpDTO.cugrpId;
    this.customergroup = setupcugrpDTO.customergroup;
    this.salesPerson = setupcugrpDTO.salesPerson;
    this.insertUser = setupcugrpDTO.insertUser;
    this.insertDatetime = setupcugrpDTO.insertDatetime;
    this.updatedUser = setupcugrpDTO.updatedUser;
    this.updatedDatetime = setupcugrpDTO.updatedDatetime;
}
}

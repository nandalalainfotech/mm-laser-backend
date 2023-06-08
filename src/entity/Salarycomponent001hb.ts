import { SalarycomponentDTO } from "../dto/Salarycomponent.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("salarycomponent001hb", { schema: "erpnextgeneration5" })
export class Salarycomponent001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "salcompId" })
  salcompId: number;

  @Column("varchar", { name: "comName", nullable: true, length: 50 })
  comName: string | null;

  @Column("varchar", { name: "abbr", nullable: true, length: 30 })
  abbr: string | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(salarycomponentDTO: SalarycomponentDTO) {
    this.salcompId = salarycomponentDTO.salcompId;
    this.comName = salarycomponentDTO.comName;
    this.abbr = salarycomponentDTO.abbr;
    this.insertUser = salarycomponentDTO.insertUser;
    this.insertDatetime = salarycomponentDTO.insertDatetime;
    this.updatedUser = salarycomponentDTO.updatedUser;
    this.updatedDatetime = salarycomponentDTO.updatedDatetime;
}
}

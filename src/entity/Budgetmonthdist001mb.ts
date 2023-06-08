import { BudgetmonthdistDTO } from "../dto/Budgetmonthdist.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("budgetmonthdist001mb", { schema: "erpnextgeneration5" })
export class Budgetmonthdist001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "bmdId" })
  bmdId: number;

  @Column("varchar", { name: "distName", length: 50 })
  distName: string;

  @Column("varchar", { name: "respMonth", length: 50 })
  respMonth: string;

  @Column("decimal", {
    name: "percentAllocate",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  percentAllocate: string | null;

  @Column("year", { name: "fiscalYear" })
  fiscalYear: number;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(budgetmonthdistDTO: BudgetmonthdistDTO) {
    this.bmdId = budgetmonthdistDTO.bmdId;
    this.distName = budgetmonthdistDTO.distName;
    this.fiscalYear = budgetmonthdistDTO.fiscalYear;
    this.percentAllocate = budgetmonthdistDTO.percentAllocate;
    this.respMonth = budgetmonthdistDTO.respMonth;
    this.insertUser = budgetmonthdistDTO.insertUser;
    this.insertDatetime = budgetmonthdistDTO.insertDatetime;
    this.updatedUser = budgetmonthdistDTO.updatedUser;
    this.updatedDatetime = budgetmonthdistDTO.updatedDatetime;
}
}

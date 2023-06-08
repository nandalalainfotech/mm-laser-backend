import { BudgetDTO } from "../dto/Budget.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("budget001mb", { schema: "erpnextgeneration5" })
export class Budget001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "bgId" })
  bgId: number;

  @Column("varchar", { name: "budgetName", length: 50 })
  budgetName: string;

  @Column("varchar", { name: "docStatus", length: 50 })
  docStatus: string;

  @Column("varchar", { name: "centerName", length: 50 })
  centerName: string;

  @Column("varchar", { name: "actifannualbgexceed", length: 50 })
  actifannualbgexceed: string;

  @Column("varchar", { name: "actifmonthbgexceed", length: 50 })
  actifmonthbgexceed: string;

  @Column("varchar", { name: "company", length: 50 })
  company: string;

  @Column("varchar", { name: "bgaccountType", length: 60 })
  bgaccountType: string;

  @Column("decimal", {
    name: "bgAmount",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  bgAmount: string | null;

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

  setProperties(budgetDTO: BudgetDTO) {
    this.bgId = budgetDTO.bgId;
    this.budgetName = budgetDTO.budgetName;
    this.docStatus = budgetDTO.docStatus;
    this.centerName = budgetDTO.centerName;
    this.actifannualbgexceed = budgetDTO.actifannualbgexceed;
    this.actifmonthbgexceed = budgetDTO.actifmonthbgexceed;
    this.fiscalYear = budgetDTO.fiscalYear;
    this.company = budgetDTO.company;
    this.bgaccountType = budgetDTO.bgaccountType;
    this.bgAmount = budgetDTO.bgAmount;
    this.insertUser = budgetDTO.insertUser;
    this.insertDatetime = budgetDTO.insertDatetime;
    this.updatedUser = budgetDTO.updatedUser;
    this.updatedDatetime = budgetDTO.updatedDatetime;
}
}

import { BudgetaccounttypeDTO } from "../dto/Budgetaccounttype.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("budgetaccounttype001mb", { schema: "erpnextgeneration5" })
export class Budgetaccounttype001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "bgaccId" })
  bgaccId: number;

  @Column("varchar", { name: "bgaccountType", length: 60 })
  bgaccountType: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(budgetaccounttypeDTO: BudgetaccounttypeDTO) {
    this.bgaccId = budgetaccounttypeDTO.bgaccId;
    this.bgaccountType = budgetaccounttypeDTO.bgaccountType;
    this.insertUser = budgetaccounttypeDTO.insertUser;
    this.insertDatetime = budgetaccounttypeDTO.insertDatetime;
    this.updatedUser = budgetaccounttypeDTO.updatedUser;
    this.updatedDatetime = budgetaccounttypeDTO.updatedDatetime;
}
}

import { ExpensesclmDTO } from "../dto/Expensesclm.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("expensesclm001hb", { schema: "erpnextgeneration5" })
export class Expensesclm001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "expclmId" })
  expclmId: number;

  @Column("varchar", { name: "expCode", nullable: true, length: 255 })
  expCode: string | null;

  @Column("varchar", { name: "expType", nullable: true, length: 255 })
  expType: string | null;

  @Column("varchar", { name: "status", nullable: true, length: 255 })
  status: string | null;

  @Column("int", { name: "totalclmAmt", nullable: true })
  totalclmAmt: number | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(expensesclmDTO: ExpensesclmDTO) {
    this.expclmId = expensesclmDTO.expclmId;
    this.expCode = expensesclmDTO.expCode;
    this.status = expensesclmDTO.status;
    this.expType = expensesclmDTO.expType;
    this.totalclmAmt = expensesclmDTO.totalclmAmt;
    this.insertUser = expensesclmDTO.insertUser;
    this.insertDatetime = expensesclmDTO.insertDatetime;
    this.updatedUser = expensesclmDTO.updatedUser;
    this.updatedDatetime = expensesclmDTO.updatedDatetime;
}
}

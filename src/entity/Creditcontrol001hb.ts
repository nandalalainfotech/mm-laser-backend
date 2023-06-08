import { CreditcontrolDTO } from "../dto/Creditcontrol.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("creditcontrol001hb", { schema: "erpnextgeneration5" })
export class Creditcontrol001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "credId" })
  credId: number;

  @Column("varchar", { name: "creditName", length: 60 })
  creditName: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  
  setProperties(creditcontrolDTO: CreditcontrolDTO) {
    this.credId = creditcontrolDTO.credId;
    this.creditName = creditcontrolDTO.creditName;
    this.insertUser = creditcontrolDTO.insertUser;
    this.insertDatetime = creditcontrolDTO.insertDatetime;
    this.updatedUser = creditcontrolDTO.updatedUser;
    this.updatedDatetime = creditcontrolDTO.updatedDatetime;
}
}

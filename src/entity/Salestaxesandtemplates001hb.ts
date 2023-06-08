import { SalestaxesandtemplatesDTO } from "../dto/Salestaxesandtemplates.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("salestaxesandtemplates001hb", { schema: "erpnextgeneration5" })
export class Salestaxesandtemplates001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "title", length: 45 })
  title: string;

  @Column("varchar", { name: "company", length: 45 })
  company: string;

  @Column("varchar", { name: "type", length: 45 })
  type: string;

  @Column("varchar", { name: "accounthead", length: 45 })
  accounthead: string;

  @Column("int", { name: "rate", unsigned: true })
  rate: number;

  @Column("int", { name: "amount", unsigned: true })
  amount: number;

  @Column("int", { name: "total", unsigned: true })
  total: number;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(salestaxesandtemplatesDTO: SalestaxesandtemplatesDTO) {
    this.id = salestaxesandtemplatesDTO.id;
    this.title = salestaxesandtemplatesDTO.title;
    this.company = salestaxesandtemplatesDTO.company;
    this.type = salestaxesandtemplatesDTO.type;
    this.accounthead = salestaxesandtemplatesDTO.accounthead;
    this.rate = salestaxesandtemplatesDTO.rate;
    this.amount = salestaxesandtemplatesDTO.amount;
    this.total = salestaxesandtemplatesDTO.total;
    this.insertUser = salestaxesandtemplatesDTO.insertUser;
    this.insertDatetime = salestaxesandtemplatesDTO.insertDatetime;
    this.updatedUser = salestaxesandtemplatesDTO.updatedUser;
    this.updatedDatetime = salestaxesandtemplatesDTO.updatedDatetime;
}
}

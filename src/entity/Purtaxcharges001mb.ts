import { PurtaxchargesDTO } from "../dto/Purtaxcharges.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("purtaxcharges001mb", { schema: "erpnextgeneration5" })
export class Purtaxcharges001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "putaxId" })
  putaxId: number;

  @Column("varchar", { name: "status", length: 50 })
  status: string;

  @Column("varchar", { name: "company", length: 50 })
  company: string;

  @Column("varchar", { name: "taxchgType", length: 50 })
  taxchgType: string;

  @Column("varchar", { name: "accountHead", length: 50 })
  accountHead: string;

  @Column("decimal", { name: "rate", nullable: true, precision: 12, scale: 4 })
  rate: string | null;

  @Column("decimal", {
    name: "amount",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  amount: string | null;

  @Column("decimal", { name: "total", nullable: true, precision: 12, scale: 4 })
  total: string | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(PurtaxchargesDTO: PurtaxchargesDTO) {
    this.putaxId = PurtaxchargesDTO.putaxId;
    this.status = PurtaxchargesDTO.status;
    this.company = PurtaxchargesDTO.company;
    this.taxchgType = PurtaxchargesDTO.taxchgType;
    this.accountHead = PurtaxchargesDTO.accountHead;
    this.rate = PurtaxchargesDTO.rate;
    this.amount = PurtaxchargesDTO.amount;
    this.total = PurtaxchargesDTO.total;
    this.insertUser = PurtaxchargesDTO.insertUser;
    this.insertDatetime = PurtaxchargesDTO.insertDatetime;
    this.updatedUser = PurtaxchargesDTO.updatedUser;
    this.updatedDatetime = PurtaxchargesDTO.updatedDatetime;
}
}

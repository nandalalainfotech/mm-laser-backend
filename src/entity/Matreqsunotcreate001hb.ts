import { MatreqsunotcreateDTO } from "../dto/Matreqsunotcreate.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("matreqsunotcreate001hb", { schema: "erpnextgeneration5" })
export class Matreqsunotcreate001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "mrsId" })
  mrsId: number;

  @Column("varchar", { name: "mrSeries", length: 50 })
  mrSeries: string;

  @Column("varchar", { name: "itemCode", length: 50 })
  itemCode: string;

  @Column("varchar", { name: "description", nullable: true, length: 150 })
  description: string | null;

  @Column("varchar", { name: "company", length: 40 })
  company: string;

  @Column("datetime", { name: "date" })
  date: Date;

  @Column("int", { name: "quantity" })
  quantity: number;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(matreqsunotcreateDTO: MatreqsunotcreateDTO) {
    this.mrsId = matreqsunotcreateDTO.mrsId;
    this.mrSeries = matreqsunotcreateDTO.mrSeries;
    this.date = matreqsunotcreateDTO.date;
    this.itemCode = matreqsunotcreateDTO.itemCode;
    this.quantity = matreqsunotcreateDTO.quantity;
    this.description = matreqsunotcreateDTO.description;
    this.company = matreqsunotcreateDTO.company;
    this.insertUser = matreqsunotcreateDTO.insertUser;
    this.insertDatetime = matreqsunotcreateDTO.insertDatetime;
    this.updatedUser = matreqsunotcreateDTO.updatedUser;
    this.updatedDatetime = matreqsunotcreateDTO.updatedDatetime;
}
}

import { ShippingruleDTO } from "../dto/Shippingrule.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("shippingrule001hb", { schema: "erpnextgeneration5" })
export class Shippingrule001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "sruleId" })
  sruleId: number;

  @Column("varchar", { name: "sruleName", length: 50 })
  sruleName: string;

  @Column("varchar", { name: "status", length: 50 })
  status: string;

  @Column("varchar", { name: "sruleLabel", nullable: true, length: 50 })
  sruleLabel: string | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(shippingruleDTO: ShippingruleDTO) {
    this.sruleId = shippingruleDTO.sruleId;
    this.sruleName = shippingruleDTO.sruleName;
    this.status = shippingruleDTO.status;
    this.sruleLabel = shippingruleDTO.sruleLabel;
    this.insertUser = shippingruleDTO.insertUser;
    this.insertDatetime = shippingruleDTO.insertDatetime;
    this.updatedUser = shippingruleDTO.updatedUser;
    this.updatedDatetime = shippingruleDTO.updatedDatetime;
}
}

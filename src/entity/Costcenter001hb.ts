import { CostcenterDTO } from "../dto/Costcenter.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("costcenter001hb", { schema: "erpnextgeneration5" })
export class Costcenter001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "centId" })
  centId: number;

  @Column("varchar", { name: "centerName", length: 50 })
  centerName: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(costcenterDTO: CostcenterDTO) {
    this.centId = costcenterDTO.centId;
    this.centerName = costcenterDTO.centerName;
    this.insertUser = costcenterDTO.insertUser;
    this.insertDatetime = costcenterDTO.insertDatetime;
    this.updatedUser = costcenterDTO.updatedUser;
    this.updatedDatetime = costcenterDTO.updatedDatetime;
}
}

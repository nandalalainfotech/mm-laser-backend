import { TerritoryDTO } from "../dto/Territory.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("territory001mb", { schema: "erpnextgeneration5" })
export class Territory001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "terId" })
  terId: number;

  @Column("varchar", { name: "terName", length: 50 })
  terName: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(territoryDTO: TerritoryDTO) {
    this.terId = territoryDTO.terId;
    this.terName = territoryDTO.terName;
    this.insertUser = territoryDTO.insertUser;
    this.insertDatetime = territoryDTO.insertDatetime;
    this.updatedUser = territoryDTO.updatedUser;
    this.updatedDatetime = territoryDTO.updatedDatetime;
}
}

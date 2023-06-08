import { CrmmintorespDTO } from "../dto/Crmmintoresp.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("crmmintoresp001hb", { schema: "erpnextgeneration5" })
export class Crmmintoresp001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "mrpId" })
  mrpId: number;

  @Column("varchar", { name: "mintoresp", length: 20 })
  mintoresp: string;

  @Column("datetime", { name: "date" })
  date: Date;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(crmmintorespDTO: CrmmintorespDTO) {
    this.mrpId = crmmintorespDTO.mrpId;
    this.date = crmmintorespDTO.date;
    this.mintoresp = crmmintorespDTO.mintoresp;
    this.insertUser = crmmintorespDTO.insertUser;
    this.insertDatetime = crmmintorespDTO.insertDatetime;
    this.updatedUser = crmmintorespDTO.updatedUser;
    this.updatedDatetime = crmmintorespDTO.updatedDatetime;
}
}

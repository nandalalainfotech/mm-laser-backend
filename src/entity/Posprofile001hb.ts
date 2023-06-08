import { PosprofileDTO } from "../dto/Posprofile.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("posprofile001hb", { schema: "erpnextgeneration5" })
export class Posprofile001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "profileId" })
  profileId: number;

  @Column("varchar", { name: "appforUser", length: 60 })
  appforUser: string;

  @Column("varchar", { name: "series", length: 50 })
  series: string;

  @Column("varchar", { name: "company", length: 60 })
  company: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(posprofileDTO: PosprofileDTO) {
    this.profileId = posprofileDTO.profileId;
    this.appforUser = posprofileDTO.appforUser;
    this.series = posprofileDTO.series;
    this.company = posprofileDTO.company;
    this.insertUser = posprofileDTO.insertUser;
    this.insertDatetime = posprofileDTO.insertDatetime;
    this.updatedUser = posprofileDTO.updatedUser;
    this.updatedDatetime = posprofileDTO.updatedDatetime;
}
}

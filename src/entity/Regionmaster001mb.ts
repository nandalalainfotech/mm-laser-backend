import { RegionmasterDTO } from "src/dto/Regionmaster.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("regionmaster001mb", { schema: "mmlaser" })
export class Regionmaster001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "sl_no" })
  slNo: number;

  @Column("varchar", { name: "region", nullable: true, length: 255 })
  region: string | null;

  @Column("tinyint", { name: "status", width: 1 })
  status: boolean;

  @Column("varchar", { name: "insert_user", nullable: true, length: 40 })
  insertUser: string | null;

  @Column("datetime", { name: "insert_datetime", nullable: true })
  insertDatetime: Date | null;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(regionmasterDTO: RegionmasterDTO) {
    this.slNo = regionmasterDTO.slNo;
    this.region = regionmasterDTO.region;
    this.status = regionmasterDTO.status;
    this.insertUser = regionmasterDTO.insertUser;
    this.insertDatetime = regionmasterDTO.insertDatetime;
    this.updatedUser = regionmasterDTO.updatedUser;
    this.updatedDatetime = regionmasterDTO.updatedDatetime;
  }
}

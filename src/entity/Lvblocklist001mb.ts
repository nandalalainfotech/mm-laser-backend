import { LvblocklistDTO } from "../dto/Lvblocklist.dto";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("sNo", ["sNo"], {})
@Entity("lvblocklist001mb", { schema: "erpnextgeneration5" })
export class Lvblocklist001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "lvblockId" })
  lvblockId: number;

  @Column("varchar", { name: "blockName", length: 30 })
  blockName: string;

  @Column("int", { name: "sNo", nullable: true })
  sNo: number | null;

  @Column("varchar", { name: "company", nullable: true, length: 255 })
  company: string | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(lvblocklistDTO: LvblocklistDTO) {
    this.lvblockId = lvblocklistDTO.lvblockId;
    this.blockName = lvblocklistDTO.blockName;
    this.sNo = lvblocklistDTO.sNo;
    this.company = lvblocklistDTO.company;
    this.insertUser = lvblocklistDTO.insertUser;
    this.insertDatetime = lvblocklistDTO.insertDatetime;
    this.updatedUser = lvblocklistDTO.updatedUser;
    this.updatedDatetime = lvblocklistDTO.updatedDatetime;
}
}

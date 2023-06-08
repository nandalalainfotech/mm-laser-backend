import { TreenodeDTO } from "../dto/Treenode.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("treenode001mb", { schema: "erpnextgeneration5" })
export class Treenode001mb {
  @PrimaryGeneratedColumn({ type: "bigint", name: "ID" })
  id: string;

  @Column("varchar", { name: "ISPARENT", length: 255 })
  isparent: string;

  @Column("varchar", { name: "PID", length: 255 })
  pid: string;

  @Column("varchar", { name: "PARENTNAME", length: 255 })
  parentname: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(treenodeDTO: TreenodeDTO) {
    this.id = treenodeDTO.id;
    this.isparent = treenodeDTO.isparent;
    this.pid = treenodeDTO.pid;
    this.parentname = treenodeDTO.parentname;
    this.insertUser = treenodeDTO.insertUser;
    this.insertDatetime = treenodeDTO.insertDatetime;
    this.updatedUser = treenodeDTO.updatedUser;
    this.updatedDatetime = treenodeDTO.updatedDatetime;
}
}

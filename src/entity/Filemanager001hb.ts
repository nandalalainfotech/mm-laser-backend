import { FilemanagerDTO } from "../dto/Filemanager.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("filemanager001hb", { schema: "erpnextgeneration5" })
export class Filemanager001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "category", nullable: true, length: 255 })
  category: string | null;

  @Column("varchar", { name: "filename", nullable: true, length: 255 })
  filename: string | null;

  @Column("varchar", { name: "loginuser", nullable: true, length: 255 })
  loginuser: string | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  @Column("varchar", { name: "originalfilename", nullable: true, length: 255 })
  originalfilename: string | null;

  setProperties(filemanagerDTO: FilemanagerDTO) {
    this.id = filemanagerDTO.id;
    this.category = filemanagerDTO.category;
    this.filename = filemanagerDTO.filename;
    this.loginuser = filemanagerDTO.loginuser;
    this.originalfilename = filemanagerDTO.originalfilename;
    this.insertUser = filemanagerDTO.insertUser;
    this.insertDatetime = filemanagerDTO.insertDatetime;
    this.updatedUser = filemanagerDTO.updatedUser;
    this.updatedDatetime = filemanagerDTO.updatedDatetime;
}
}

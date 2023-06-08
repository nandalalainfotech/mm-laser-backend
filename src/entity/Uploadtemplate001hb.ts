import { UploadtemplateDTO } from "../dto/Uploadtemplate.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("uploadtemplate001hb", { schema: "erpnextgeneration5" })
export class Uploadtemplate001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("blob", { name: "content" })
  content: Buffer;

  @Column("varchar", { name: "filename", length: 45 })
  filename: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(uploadtemplateDTO: UploadtemplateDTO) {
    this.id = uploadtemplateDTO.id;
    this.content = uploadtemplateDTO.content;
    this.filename = uploadtemplateDTO.filename;
    this.insertUser = uploadtemplateDTO.insertUser;
    this.insertDatetime = uploadtemplateDTO.insertDatetime;
    this.updatedUser = uploadtemplateDTO.updatedUser;
    this.updatedDatetime = uploadtemplateDTO.updatedDatetime;
}
}

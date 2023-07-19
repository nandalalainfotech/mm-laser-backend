import { ApplicationlogosettingsDTO } from "../dto/applicationlogosettings.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("applicationlogosettings001hb", { schema: "mmlaser" })
export class Applicationlogosettings001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "registerid" })
  registerid: number;

  @Column("varchar", { name: "clientname", nullable: true, length: 255 })
  clientname: string | null;

  @Column("varchar", { name: "clientdescription", nullable: true, length: 255 })
  clientdescription: string | null;

  @Column("varchar", { name: "category", nullable: true, length: 255 })
  category: string | null;

  @Column("varchar", { name: "filename", nullable: true, length: 255 })
  filename: string | null;

  @Column("longblob", { name: "data", nullable: true })
  data: Buffer | null;

  @Column("varchar", { name: "loginuser", nullable: true, length: 255 })
  loginuser: string | null;

  @Column("varchar", { name: "insert_user", nullable: true, length: 40 })
  insertUser: string | null;

  @Column("datetime", { name: "insert_datetime", nullable: true })
  insertDatetime: Date | null;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  @Column("varchar", { name: "originalfilename", nullable: true, length: 255 })
  originalfilename: string | null;

  setProperties(applicationlogosettingsDTO: ApplicationlogosettingsDTO) {
    this.registerid = applicationlogosettingsDTO.registerid;
    this.clientname = applicationlogosettingsDTO.clientname;
    this.clientdescription = applicationlogosettingsDTO.clientdescription;
    this.category = applicationlogosettingsDTO.category;
    this.filename = applicationlogosettingsDTO.filename;
    this.loginuser = applicationlogosettingsDTO.loginuser;
    this.originalfilename = applicationlogosettingsDTO.originalfilename;
    this.insertUser = applicationlogosettingsDTO.insertUser;
    this.insertDatetime = applicationlogosettingsDTO.insertDatetime;
    this.updatedUser = applicationlogosettingsDTO.updatedUser;
    this.updatedDatetime = applicationlogosettingsDTO.updatedDatetime;
}
}

import { LoginDTO } from "../dto/Login.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("login001hb", { schema: "erpnextgeneration5" })
export class Login001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "login_id" })
  loginId: number;

  @Column("varchar", { name: "username", nullable: true, length: 50 })
  username: string | null;

  @Column("smallint", { name: "password", nullable: true })
  password: number | null;

  @Column("decimal", {
    name: "domain",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  domain: string | null;

  @Column("varchar", { name: "insert_user", nullable: true, length: 40 })
  insertUser: string | null;

  @Column("datetime", { name: "insert_datetime", nullable: true })
  insertDatetime: Date | null;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  
  setProperties(loginDTO: LoginDTO) {
    this.loginId = loginDTO.loginId;
    this.username = loginDTO.username;
    this.password = loginDTO.password;
    this.domain = loginDTO.domain;
    this.insertUser = loginDTO.insertUser;
    this.insertDatetime = loginDTO.insertDatetime;
    this.updatedUser = loginDTO.updatedUser;
    this.updatedDatetime = loginDTO.updatedDatetime;
}
}

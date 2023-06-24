import { UserDTO } from "../dto/User.dto";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role001hb } from "./Role001hb";

@Entity("user001hb", { schema: "erpnextgeneration5" })
export class User001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "person_id" })
  personId: number;

  // @Column("varchar", { name: "domain", nullable: true, length: 40 })
  // domain: string | null;

  @Column("varchar", { name: "username", nullable: true, length: 40 })
  username: string | null;

  @Column("varchar", { name: "password", nullable: true, length: 100 })
  password: string | null;

  @Column("char", { name: "status", nullable: true, length: 1 })
  status: string | null;

  @Column("int", { name: "language", nullable: true })
  language: number | null;

  @Column("varchar", { name: "email", nullable: true, length: 250 })
  email: string | null;

  @Column("varchar", { name: "filename", nullable: true, length: 255 })
  filename: string | null;

  @Column("varchar", { name: "securityquestion", nullable: true, length: 250 })
  securityquestion: string | null;

  @Column("varchar", { name: "securityanswer", nullable: true, length: 250 })
  securityanswer: string | null;

  @Column("varchar", {
    name: "theme",
    nullable: true,
    length: 10,
    default: () => "'#286090'",
  })
  theme: string | null;

  @Column("varchar", { name: "insert_user", nullable: true, length: 40 })
  insertUser: string | null;

  @Column("datetime", { name: "insert_datetime", nullable: true })
  insertDatetime: Date | null;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  @Column("varchar", { name: "firstname", nullable: true, length: 50 })
  firstname: string | null;

  @Column("varchar", { name: "lastname", nullable: true, length: 50 })
  lastname: string | null;

  @OneToMany(() => Role001hb, (role001hb) => role001hb.rl)
  role001hbs: Role001hb[];

  setProperties(userDTO: UserDTO) {
    this.personId = userDTO.personId;
    // this.domain = userDTO.domain;
    this.username = userDTO.username;
    this.firstname = userDTO.firstname;
    this.lastname = userDTO.lastname;
    this.language = userDTO.language;
    this.password = userDTO.password;
    this.status = userDTO.status;
    this.email = userDTO.email;
    this.securityquestion = userDTO.securityquestion;
    this.securityanswer = userDTO.securityanswer;
    this.theme = userDTO.theme;
    this.insertUser = userDTO.insertUser;
    this.insertDatetime = userDTO.insertDatetime;
    this.updatedUser = userDTO.updatedUser;
    this.updatedDatetime = userDTO.updatedDatetime;
}
}

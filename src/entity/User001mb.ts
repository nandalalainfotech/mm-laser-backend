import { UserDTO } from "src/dto/User.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user001mb", { schema: "erpnextgeneration5" })
export class User001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "person_id" })
  personId: number;

  @Column("varchar", { name: "username", nullable: true, length: 40 })
  username: string | null;

  @Column("varchar", { name: "password", nullable: true, length: 100 })
  password: string | null;

  @Column("varchar", { name: "rolename", nullable: true, length: 40 })
  rolename: string | null;

  @Column("char", { name: "status", nullable: true, length: 1 })
  status: string | null;

  @Column("varchar", { name: "mobileno", nullable: true, length: 10 })
  mobileno: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 250 })
  email: string | null;

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


  setProperties(userDTO: UserDTO) {
    this.personId = userDTO.personId;
    this.username = userDTO.username;
    this.firstname = userDTO.firstname;
    this.lastname = userDTO.lastname;
    this.rolename = userDTO.rolename;
    this.password = userDTO.password;
    this.status = userDTO.status;
    this.email = userDTO.email;
    this.mobileno = userDTO.mobileno;
    this.theme = userDTO.theme;
    this.insertUser = userDTO.insertUser;
    this.insertDatetime = userDTO.insertDatetime;
    this.updatedUser = userDTO.updatedUser;
    this.updatedDatetime = userDTO.updatedDatetime;
  }
}

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("registration001hb", { schema: "erpnextgeneration5" })
export class Registration001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "registerid" })
  registerid: number;

  @Column("varchar", { name: "firstname", length: 45 })
  firstname: string;

  @Column("varchar", { name: "lastname", length: 45 })
  lastname: string;

  @Column("varchar", { name: "domain", length: 30 })
  domain: string;

  @Column("varchar", { name: "username", length: 45 })
  username: string;

  @Column("varchar", { name: "securityquestion", length: 100 })
  securityquestion: string;

  @Column("varchar", { name: "securityanswer", length: 45 })
  securityanswer: string;

  @Column("varchar", { name: "message", nullable: true, length: 200 })
  message: string | null;

  @Column("varchar", { name: "status", length: 45 })
  status: string;

  @Column("varchar", { name: "email", length: 50 })
  email: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;
}

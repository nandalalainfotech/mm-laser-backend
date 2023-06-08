import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("appsetting001hb", { schema: "erpnextgeneration5" })
export class Appsetting001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "appsetid" })
  appsetid: number;

  @Column("varchar", { name: "property", nullable: true, length: 250 })
  property: string | null;

  @Column("varchar", { name: "link", nullable: true, length: 250 })
  link: string | null;

  @Column("varchar", { name: "login_user", nullable: true, length: 50 })
  loginUser: string | null;

  @Column("varchar", { name: "status", nullable: true, length: 50 })
  status: string | null;

  @Column("varchar", { name: "insert_user", nullable: true, length: 50 })
  insertUser: string | null;

  @Column("datetime", { name: "insert_datetime", nullable: true })
  insertDatetime: Date | null;

  @Column("varchar", { name: "updated_user", nullable: true, length: 50 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

}

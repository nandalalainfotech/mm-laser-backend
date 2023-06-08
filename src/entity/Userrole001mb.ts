import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("fk_login_idx", ["loginid"], {})
@Entity("userrole001mb", { schema: "erpnextgeneration5" })
export class Userrole001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "userroleid" })
  userroleid: number;

  @Column("int", { name: "loginid" })
  loginid: number;

  @Column("varchar", { name: "role", length: 45 })
  role: string;

  @Column("varchar", { name: "username", length: 45 })
  username: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;
}

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CourseDTO } from "src/dto/course.dto";
import { Employeedetails001mb } from "./employeedetails001mb";

@Entity("course001mb", { schema: "mmlaser" })
export class Course001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "slNo" })
  slNo: number;

  @Column("varchar", { name: "coursename", nullable: true, length: 255 })
  coursename: string | null;

  @Column("varchar", { name: "validity", nullable: true, length: 40 })
  validity: string | null;

  @Column("tinyint", { name: "status", width: 1 })
  status: boolean;

  @Column("varchar", { name: "insert_user", nullable: true, length: 40 })
  insertUser: string | null;

  @Column("datetime", { name: "insert_datetime", nullable: true })
  insertDatetime: Date | null;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  @OneToMany(
    () => Employeedetails001mb,
    (employeedetails001mb) => employeedetails001mb.slNo2
  )
  employeedetails001mbs: Employeedetails001mb[];

    setProperties(courseDTO: CourseDTO) {
        this.slNo = courseDTO.slNo;
        this.coursename = courseDTO.coursename;
        this.validity = courseDTO.validity;
        this.status = courseDTO.status;
        this.insertUser = courseDTO.insertUser;
        this.insertDatetime = courseDTO.insertDatetime;
        this.updatedUser = courseDTO.updatedUser;
        this.updatedDatetime = courseDTO.updatedDatetime;
    }

}
import { TaskDTO } from "../dto/Task.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("task001mb", { schema: "erpnextgeneration5" })
export class Task001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "taskid", unsigned: true })
  taskid: number;

  @Column("varchar", { name: "taskdescription", length: 45 })
  taskdescription: string;

  @Column("varchar", { name: "AssignTo", length: 45 })
  assignTo: string;

  @Column("varchar", { name: "AssignBy", length: 45 })
  assignBy: string;

  @Column("varchar", { name: "status", length: 45 })
  status: string;

  @Column("datetime", { name: "starton" })
  starton: Date;

  @Column("datetime", { name: "endon" })
  endon: Date;

  @Column("varchar", { name: "projectname", nullable: true, length: 50 })
  projectname: string | null;

  @Column("int", { name: "projectid", unsigned: true })
  projectid: number;

  @Column("time", { name: "duration", nullable: true })
  duration: string | null;

  @Column("tinyint", { name: "allday", width: 1 })
  allday: boolean;

  @Column("tinyint", { name: "sendanemail", width: 1 })
  sendanemail: boolean;

  @Column("tinyint", { name: "repeatthisevent", width: 1 })
  repeatthisevent: boolean;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(taskDTO: TaskDTO) {
    this.taskid = taskDTO.taskid;
    this.taskdescription = taskDTO.taskdescription;
    this.assignTo = taskDTO.assignTo;
    this.assignBy = taskDTO.assignBy;
    this.status = taskDTO.status;
    this.starton = taskDTO.starton;
    this.endon = taskDTO.endon;
    this.allday = taskDTO.allday;
    this.sendanemail = taskDTO.sendanemail;
    this.repeatthisevent = taskDTO.repeatthisevent;
    this.projectname = taskDTO.projectname;

    // console.log("duration", duration);
    // this.duration = duration.toUTCString();
    // console.log("After-UTC-->duration", this.duration);
    // 
    let duration = new Date(taskDTO.duration);
    console.log("duration", duration);
    this.duration = duration.getHours() + ":" + duration.getMinutes() + ":" + duration.getSeconds();
    console.log("After", this.duration);
    // let duration = new Date(taskDTO.duration);
    // console.log("duration",duration);
    // this.duration = duration.getUTCHours(), duration.getUTCMinutes(), duration.getUTCSeconds();
    // console.log("AFTER--->",  this.duration)
    this.projectid = taskDTO.projectid;
    this.insertUser = taskDTO.insertUser;
    this.insertDatetime = taskDTO.insertDatetime;
    this.updatedUser = taskDTO.updatedUser;
    this.updatedDatetime = taskDTO.updatedDatetime;
}
}

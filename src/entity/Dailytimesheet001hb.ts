import { DailytimesheetDTO } from "../dto/Dailytimesheet.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("dailytimesheet001hb", { schema: "erpnextgeneration5" })
export class Dailytimesheet001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "timesheet", length: 45 })
  timesheet: string;

  @Column("varchar", { name: "employee", length: 45 })
  employee: string;

  @Column("varchar", { name: "employeename", length: 45 })
  employeename: string;

  @Column("varchar", { name: "hours", length: 50 })
  hours: string;

  @Column("varchar", { name: "activitytype", length: 50 })
  activitytype: string;

  @Column("varchar", { name: "task", length: 50 })
  task: string;

  @Column("varchar", { name: "project", length: 45 })
  project: string;

  @Column("varchar", { name: "status", length: 50 })
  status: string;

  @Column("datetime", { name: "fromdatetime" })
  fromdatetime: Date;

  @Column("datetime", { name: "todatetime" })
  todatetime: Date;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(dailytimesheetDTO: DailytimesheetDTO) {
    this.id = dailytimesheetDTO.id;
    this.activitytype = dailytimesheetDTO.activitytype;
    this.timesheet = dailytimesheetDTO.timesheet;
    this.employee = dailytimesheetDTO.employee;
    this.employeename = dailytimesheetDTO.employeename;
    this.fromdatetime = dailytimesheetDTO.fromdatetime;
    this.todatetime = dailytimesheetDTO.todatetime;
    this.hours = dailytimesheetDTO.hours;
    this.task = dailytimesheetDTO.task;
    this.project = dailytimesheetDTO.project;
    this.status = dailytimesheetDTO.status;
    this.insertUser = dailytimesheetDTO.insertUser;
    this.insertDatetime = dailytimesheetDTO.insertDatetime;
    this.updatedUser = dailytimesheetDTO.updatedUser;
    this.updatedDatetime = dailytimesheetDTO.updatedDatetime;
}
}

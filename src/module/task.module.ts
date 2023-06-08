import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TaskController } from "../controller/task.controller";
import { Task001hb } from "../entity/Task001hb";
import { Task001mb } from "../entity/Task001mb";
import { TaskService } from "../service/task.service";

@Module({
    imports: [TypeOrmModule.forFeature([Task001mb,Task001hb])],
    providers: [TaskService],
    controllers: [TaskController]
})

export class TaskModule {}
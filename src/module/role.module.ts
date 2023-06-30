import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RoleController } from "../controller/Role.controller";
import { Role001hb } from "../entity/Role001hb";
import { Role001mb } from "../entity/Role001mb";
import { RoleService } from "../service/Role.service";

@Module({
  imports: [TypeOrmModule.forFeature([Role001mb, Role001hb])],
  providers: [RoleService],
  controllers: [RoleController],
})
export class RoleModule { }
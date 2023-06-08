import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LoginController } from "../controller/login.controller";
import { Login001hb } from "../entity/Login001hb";
import { Login001mb } from "../entity/Login001mb";
import { LoginService } from "../service/login.service";

@Module({
    imports: [TypeOrmModule.forFeature([Login001mb,Login001hb])],
    providers: [LoginService],
    controllers: [LoginController],
  })
  export class LoginModule { }
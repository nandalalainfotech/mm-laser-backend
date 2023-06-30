import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "../controller/user.controller";
import { User001hb } from "../entity/User001hb";
import { User001mb } from "../entity/User001mb";
import { UserService } from "../service/user.service";

@Module({
   imports: [TypeOrmModule.forFeature([User001mb, User001hb]),

   ],
   providers: [UserService],
   controllers: [UserController],
})
export class UserModule { }
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { updateBankController } from "../controller/updatebank.controller";
import { Updatebank001hb } from "../entity/Updatebank001hb";
import { Updatebank001mb } from "../entity/Updatebank001mb";

import { updateBankService } from "../service/updatebank.service";

@Module({
    imports: [TypeOrmModule.forFeature([Updatebank001mb,Updatebank001hb])],
    providers: [updateBankService],
    controllers: [updateBankController],
})
export class UpdateBankModule { }
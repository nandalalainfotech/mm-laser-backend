import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ExpensesClaimsController } from "../controller/expenses-claims.controller";
import { Expensesclm001hb } from "../entity/Expensesclm001hb";
import { Expensesclm001mb } from "../entity/Expensesclm001mb";
import { ExpensesClaimsService } from "../service/expenses-claims.service";

@Module({
    imports: [TypeOrmModule.forFeature([Expensesclm001mb,Expensesclm001hb])],
    providers: [ExpensesClaimsService],
    controllers: [ExpensesClaimsController]
})

export class ExpensesClaimsModule { }
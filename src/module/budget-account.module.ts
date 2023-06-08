import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BudgetAccountController } from "../controller/budget-account.controller";
import { Budgetaccounttype001hb } from "../entity/Budgetaccounttype001hb";
import { Budgetaccounttype001mb } from "../entity/Budgetaccounttype001mb";
import { BudgetAccountService } from "../service/budget-account.service";

@Module({
    imports: [TypeOrmModule.forFeature([Budgetaccounttype001mb,Budgetaccounttype001hb])],
    providers: [BudgetAccountService],
    controllers: [BudgetAccountController]
})

export class BudgetAccountModule {}
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BudgetMonthDistControllers } from "../controller/budget-monthdist.controller";
import { Budgetmonthdist001hb } from "../entity/Budgetmonthdist001hb";
import { Budgetmonthdist001mb } from "../entity/Budgetmonthdist001mb";
import { BudgetMonthDistService } from "../service/budget-monthdist.service";

@Module({
    imports: [TypeOrmModule.forFeature([Budgetmonthdist001mb,Budgetmonthdist001hb])],
    providers: [BudgetMonthDistService],
    controllers: [BudgetMonthDistControllers]
})

export class BudgetMonthlyDistModule {}
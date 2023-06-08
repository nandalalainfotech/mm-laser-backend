import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BudgetController } from "../controller/budget.controller";
import { Budget001hb } from "../entity/Budget001hb";
import { Budget001mb } from "../entity/Budget001mb";
import { BudgetService } from "../service/budget.service";

@Module({
    imports: [TypeOrmModule.forFeature([Budget001mb,Budget001hb])],
    providers: [BudgetService],
    controllers: [BudgetController]
})

export class BudgetModule {}
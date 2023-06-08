import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BudgeVarReportControllers } from "../controller/budget-varreport.controller";
import { Budgetvarreport001hb } from "../entity/Budgetvarreport001hb";
import { Budgetvarreport001mb } from "../entity/Budgetvarreport001mb";
import { BudgeVarReportService } from "../service/budget-varreport.service";

@Module({
    imports: [TypeOrmModule.forFeature([Budgetvarreport001mb,Budgetvarreport001hb])],
    providers: [BudgeVarReportService],
    controllers: [BudgeVarReportControllers]
})

export class BudgetVarReportModule {}
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrmRepInactiveCustomerController } from '../controller/crm-rep-inactivecus.controller';
import { Inactivecust001hb } from '../entity/Inactivecust001hb';
import { Inactivecust001mb } from '../entity/Inactivecust001mb';
import { CrmRepInactiveCustomerService } from '../service/crm-rep-inactivecus.service';

@Module({
    imports: [TypeOrmModule.forFeature([Inactivecust001mb,Inactivecust001hb])],
    providers: [CrmRepInactiveCustomerService],
    controllers: [CrmRepInactiveCustomerController],
})
export class CrmRepInactiveCustomerModule { }

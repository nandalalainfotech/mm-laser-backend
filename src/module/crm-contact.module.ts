import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CrmContactController } from "../controller/crm-contact.controller";
import { Crmspcontact001hb } from "../entity/Crmspcontact001hb";
import { Crmspcontact001mb } from "../entity/Crmspcontact001mb";
import { CrmContactService } from "../service/crm-contact.service";

@Module({
    imports: [TypeOrmModule.forFeature([Crmspcontact001mb,Crmspcontact001hb])],
    providers: [CrmContactService],
    controllers: [CrmContactController]
})

export class CrmContactModule {}
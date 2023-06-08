import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IssueItemController } from '../controller/issue-item.controller';
import { Issueditem001hb } from '../entity/Issueditem001hb';
import { Issueditem001mb } from '../entity/Issueditem001mb';
import { IssueItemService } from '../service/issue-item.service';



@Module({
    imports: [TypeOrmModule.forFeature([Issueditem001mb,Issueditem001hb])],
    providers: [IssueItemService],
    controllers: [IssueItemController],
})
export class IssueItemModule { }
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JournalEntryController } from '../controller/journal-entry.controller';
import { Jounalentry001hb } from '../entity/Jounalentry001hb';
import { Jounalentry001mb } from '../entity/Jounalentry001mb';
import { JournalEntryService } from '../service/journal-entry.service';

@Module({
    imports: [TypeOrmModule.forFeature([Jounalentry001mb,Jounalentry001hb])],
    providers: [JournalEntryService],
    controllers: [JournalEntryController],
})
export class JournalEntryModule { }
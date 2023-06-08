import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DelNoteTrendController } from "../controller/del-note-trend.controller";
import { Delnotetrends001hb } from "../entity/Delnotetrends001hb";
import { Delnotetrends001mb } from "../entity/Delnotetrends001mb";
import { DelNoteTrendService } from "../service/del-note-trend.service";

@Module({
    imports: [TypeOrmModule.forFeature([Delnotetrends001mb,Delnotetrends001hb])],
    providers: [DelNoteTrendService],
    controllers: [DelNoteTrendController]
})

export class DelNoteTrendModule {}
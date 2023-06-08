import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeaveBlockController } from '../controller/leave-block.controller';
import { Lvblocklist001hb } from '../entity/Lvblocklist001hb';
import { Lvblocklist001mb } from '../entity/Lvblocklist001mb';
import { LeaveBlockService } from '../service/leave-block.service';

@Module({
  imports: [TypeOrmModule.forFeature([Lvblocklist001mb,Lvblocklist001hb])],
  providers: [LeaveBlockService],
  controllers: [LeaveBlockController],
})
export class LeaveBlockModule {}

import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FavouritesController } from "../controller/favourites.controller";
import { Favourites001hb } from "../entity/Favourites001hb"
import { Favourites001mb } from "../entity/Favourites001mb";
import { FavouritesService } from "../service/favourites.service";

@Module({
    imports: [TypeOrmModule.forFeature([Favourites001mb,Favourites001hb])],
    providers: [FavouritesService],
    controllers: [ FavouritesController],
  })
  export class  FavouritesModule {}
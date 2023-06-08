import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { FavouritesDTO } from "../dto/favourites.dto";
import { Favourites001mb } from "../entity/Favourites001mb";
import { FavouritesService } from "../service/favourites.service";

@Controller('/testandreportstudio/api/favourite')
export class FavouritesController {
    constructor(private readonly favouritesService: FavouritesService) { }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() favouritesDTO: FavouritesDTO[]): Promise<Favourites001mb[]> {
        return this.favouritesService.create(favouritesDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() favouritesDTO: FavouritesDTO): Promise<Favourites001mb> {
        return this.favouritesService.update(favouritesDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Favourites001mb[]> {
        return this.favouritesService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: number): Promise<Favourites001mb> {
        return this.favouritesService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: number): Promise<void> {
        return this.favouritesService.remove(id);
    }
}

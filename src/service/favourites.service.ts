import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FavouritesDTO } from "../dto/favourites.dto";
import { Favourites001hb } from "../entity/Favourites001hb";
import { Favourites001mb } from "../entity/Favourites001mb";
import { Repository } from "typeorm";

@Injectable()
export class FavouritesService {
    constructor(@InjectRepository(Favourites001mb) private readonly favouritesRepository: Repository<Favourites001mb>,
        @InjectRepository(Favourites001hb) private readonly favouriteshbRepository: Repository<Favourites001hb>) { }

    async create(favouriteDTOs: FavouritesDTO[]): Promise<Favourites001mb[]> {
        const favourites001mb = new Favourites001mb();
        if (favouriteDTOs.length > 0) {
            this.favouritesRepository.createQueryBuilder()
                .delete()
                .from(Favourites001mb)
                .where("loginUser = :loginUser", { loginUser: favouriteDTOs[0].loginUser })
                .execute();
        }

        for (let i = 0; i < favouriteDTOs.length; i++) {
            let favourites001mb = new Favourites001mb();
            favourites001mb.setProperties(favouriteDTOs[i]);
            this.favouritesRepository.save(favourites001mb);
        }
        return this.favouritesRepository.find();
    }

    async update(favouritesDTO: FavouritesDTO): Promise<Favourites001mb> {
        const favourites001mb = new Favourites001mb();
        favourites001mb.setProperties(favouritesDTO);
        await this.favouritesRepository.update({ favId: favourites001mb.favId }, favourites001mb);
        return favourites001mb;
    }

    async findAll(): Promise<Favourites001mb[]> {
        return this.favouritesRepository.find();
    }

    findOne(id: number): Promise<Favourites001mb> {
        return this.favouritesRepository.findOne(id);
    }

    async remove(id: number): Promise<void> {
        let favourites = this.favouritesRepository.findOne(id);
        let favourites001hb = new Favourites001hb();
        favourites001hb.setProperties((await favourites));
        this.favouriteshbRepository.save(favourites001hb);
        await this.favouritesRepository.delete(id);
    }
}
function login001mb(login001mb: any) {
    throw new Error("Function not implemented.");
}


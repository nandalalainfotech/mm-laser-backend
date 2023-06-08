import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ItemdtDTO } from "../dto/Itemdt.dto";
import { Itemdt001hb } from "../entity/Itemdt001hb";
import { Itemdt001mb } from "../entity/Itemdt001mb";
import { Repository } from "typeorm";

@Injectable()
export class Billservice {

    constructor(@InjectRepository(Itemdt001mb) private readonly billRepository: Repository<Itemdt001mb>,
        @InjectRepository(Itemdt001hb) private readonly billhbRepository: Repository<Itemdt001hb>,) { }

    async create(itemdtDTO: ItemdtDTO): Promise<Itemdt001mb> {
        const itemdt001mb = new Itemdt001mb();
        itemdt001mb.setProperties(itemdtDTO);
        return this.billRepository.save(itemdt001mb);
    }

    async update(itemdtDTO: ItemdtDTO): Promise<Itemdt001mb> {
        const itemdt001mb = new Itemdt001mb();
        itemdt001mb.setProperties(itemdtDTO);
        await this.billRepository.update({ itemid: itemdt001mb.itemid }, itemdt001mb);
        return this.billRepository.save(itemdt001mb);
    }

    async findAll(): Promise<Itemdt001mb[]> {
        return this.billRepository.find();
    }

    findOne(id: string): Promise<Itemdt001mb> {
        return this.billRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        let bill = this.billRepository.findOne(id);
        let itemdt001hb = new Itemdt001hb();
        itemdt001hb.setProperties((await bill));
        this.billhbRepository.save(itemdt001hb);
        await this.billRepository.delete(id);
    }

}
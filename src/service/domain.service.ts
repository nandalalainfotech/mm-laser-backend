import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DomainDTO } from "../dto/Domain.dto";
import { Domain001hb } from "../entity/Domain001hb";
import { Domain001mb } from "../entity/Domain001mb";
import { Repository } from "typeorm";
var path = require('path');
var pdf = require("pdf-creator-node");
var path = require('path');
const excel = require('exceljs');
var fs = require("fs");

@Injectable()

export class DomainService {

    constructor(@InjectRepository(Domain001mb) private readonly domainRepository: Repository<Domain001mb>,
        @InjectRepository(Domain001hb) private readonly domainhbRepository: Repository<Domain001hb>) { }

    // constructor (@InjectRepository(Domain001hb) private readonly domainRepository: Repository<Domain001hb>) {}

    async create(domainDTO: DomainDTO): Promise<Domain001mb> {
        const domain001mb = new Domain001mb();
        domain001mb.setProperties(domainDTO);
        return this.domainRepository.save(domain001mb);
    }

    async update(domainDTO: DomainDTO): Promise<Domain001mb> {
        const domain001mb = new Domain001mb();
        domain001mb.setProperties(domainDTO);
        await this.domainRepository.update({ domainId: domain001mb.domainId }, domain001mb);
        return domain001mb;
    }

    async findAll(): Promise<Domain001mb[]> {
        // console.log("id-->1", Domain001mb);

        return this.domainRepository.find();
    }

    findOne(id: string): Promise<Domain001mb> {
        return this.domainRepository.findOne(id);
    }
    async remove(id: string): Promise<void> {
        let domain = this.domainRepository.findOne(id);
        let domain001hb = new Domain001hb();
        domain001hb.setProperties((await domain));
        this.domainhbRepository.save(domain001hb);
        await this.domainRepository.delete(id);
    }
}

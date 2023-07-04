import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RoleDTO } from "../dto/Role.dto";
import { Role001hb } from "../entity/Role001hb";
import { Role001mb } from "../entity/Role001mb";
import { Repository } from "typeorm";

@Injectable()
export class RoleService {
	constructor(@InjectRepository(Role001mb) private readonly roleRepository: Repository<Role001mb>,
		@InjectRepository(Role001hb) private readonly rolehbRepository: Repository<Role001hb>) { }

	async create(roleDTO: RoleDTO): Promise<Role001mb> {
		const role001mb = new Role001mb();
		role001mb.setProperties(roleDTO);
		return this.roleRepository.save(role001mb);
	}

	async update(roleDTO: RoleDTO): Promise<Role001mb> {
		const role001mb = await this.roleRepository.findOne({ where: { id: roleDTO.id } });
		role001mb.rlid = roleDTO.rlid;
		role001mb.rolename = roleDTO.rolename;
		role001mb.status = roleDTO.status;
		role001mb.updatedUser = roleDTO.updatedUser;
		role001mb.updatedDatetime = roleDTO.updatedDatetime;
		return this.roleRepository.save(role001mb);
	}

	async findAll(): Promise<Role001mb[]> {
		return this.roleRepository.find({ order: { id: "DESC" }, relations: ["rl"] });
	}

	findOne(id: number): Promise<Role001mb> {
		return this.roleRepository.findOne(id);
	}

	async remove(id: number): Promise<void> {
		let role = this.roleRepository.findOne(id);
		let role001001hb = new Role001hb();
		role001001hb.setProperties((await role));
		this.rolehbRepository.save(role001001hb);
		await this.roleRepository.delete(id);
	}
}
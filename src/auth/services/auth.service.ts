import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';

import * as bcrypt from 'bcrypt';
import { map } from 'rxjs/operators';
import { Repository } from 'typeorm';
import { Applanguagesetting001mb } from '../../entity/Applanguagesetting001mb';
import { User001mb } from '../../entity/User001mb';
import { UserDTO } from '../../dto/User.dto';
import { ApplanguagesettingDTO } from '../../dto/Applanguagesetting.dto';
import { Role001mb } from 'src/entity/Role001mb';

@Injectable()
export class AuthService {

	constructor(@InjectRepository(Applanguagesetting001mb) private readonly applanguagesettingRepository: Repository<Applanguagesetting001mb>,
	    @InjectRepository(Role001mb) private readonly roleRepository: Repository<Role001mb>,
		@InjectRepository(User001mb) private readonly loginRepository: Repository<User001mb>, private readonly jwtService: JwtService) { }

	generateJwt(username, status, securityquestion, securityanswer): Observable<string> {
		const payload = {
			username: username, status: status, securityquestion: securityquestion, securityanswer: securityanswer,
		};
		return from(this.jwtService.signAsync(payload));
	}

	async getUserAuthentication(username: string, password: string) {
		const user001mb: User001mb = await this.loginRepository.findOne({ where: { username: username } });
		let userDTO = new UserDTO();
		if (user001mb) {
			const isMatch = await bcrypt.compare(password, user001mb.password);
			if (isMatch) {
				const lang: Applanguagesetting001mb = await this.applanguagesettingRepository.findOne({ where: { id: user001mb.language } });
				const role: Role001mb = await this.roleRepository.findOne({ where: { rlid: user001mb.personId } });
				let applang = new ApplanguagesettingDTO();
				let roleDeatil = new Role001mb();
				applang.setProperties(lang);
				roleDeatil.setProperties(role);
				userDTO.setProperties(user001mb);
				userDTO.language2 = applang;
				userDTO.role001mbs = roleDeatil;
				userDTO.password = null;
				return this.generateJwt(user001mb.username, user001mb.securityquestion, user001mb.securityanswer, user001mb.status).pipe(map((jwt: string) => {
					return { userDTO, access_token: jwt };
				})
				)
			} else {
				throw new UnauthorizedException("Invalid Password");
			}
		} else {
			throw new UnauthorizedException("Invalid Username");
		}
	}

}
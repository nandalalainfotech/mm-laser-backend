import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from '../controller/auth.controller';
import { Applanguagesetting001mb } from '../entity/Applanguagesetting001mb';
import { User001mb } from '../entity/User001mb';
import { ApplanguagesettingModule } from '../module/applanguagesetting.module';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './services/auth.service';
import { Role001mb } from 'src/entity/Role001mb';

@Module({
    imports: [
        TypeOrmModule.forFeature([User001mb, Applanguagesetting001mb,Role001mb]),
        JwtModule.registerAsync({
            imports: [ConfigModule,
            ApplanguagesettingModule], // Missing this
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get('JWT_SECRET'),
                signOptions: { expiresIn: '5000s' }
            }),
            inject: [ConfigService],
        }),
    ],
    providers: [AuthService, JwtStrategy],
    controllers: [AuthController]

})

export class AuthModule { }
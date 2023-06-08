import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from "@nestjs/typeorm";
import { diskStorage } from 'multer';
import { ApplicationlogoSettingscontroller } from '../controller/applicationlogosettings.controller';
import { Applicationlogosettings001hb } from '../entity/Applicationlogosettings001hb';
import { Applicationlogosettings001mb } from '../entity/Applicationlogosettings001mb';
import { ApplicationlogoSettingsservice } from '../service/applicationlogosettings.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Applicationlogosettings001mb,Applicationlogosettings001hb]),
        MulterModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => {
                return {
                    storage: diskStorage({
                        destination: async (req, file, cb) => {
                            const path: string = configService.get('STATICPATH');
                            return cb(null, path);
                        },
                        filename: (req, file, cb) => {
                            return cb(null, `${Date.now()}_${file.originalname}`);
                        }
                    })
                }
            },
        }),
    ],
    providers: [ApplicationlogoSettingsservice],
    controllers: [ApplicationlogoSettingscontroller],
})
export class ApplicationlogoSettingsModule { }
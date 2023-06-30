import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { ApplanguagesettingModule } from './module/applanguagesetting.module';
import { ApplicationlogoSettingsModule } from './module/applicationlogosettings.module';
// import { PersonModule } from './module/person.module';
import { RoleModule } from './module/role.module';
// import { RoleModule } from './module/role.module';
import { BookingentryModule } from './module/bookingentry.module';
import { CaseentryModule } from './module/caseentry.module';
import { CasemachineModule } from './module/casemachine.module';
import { DoctormasterModule } from './module/doctormaster.module';
import { EmployeemasterModule } from './module/employeemaster.module';
import { MachinemasterModule } from './module/machinemaster.module';
import { RegionmasterModule } from './module/regionmaster.module';
import { SystemPropertiesModule } from './module/system-properties.module';
import { UserModule } from './module/user.module';


@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            expandVariables: true,
            envFilePath: ['.env.configuration.dev'],
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) =>
            ({
                type: 'mysql',
                synchronize: false,
                host: configService.get<string>('DATABASE_HOST'),
                port: Number(configService.get<string>('DATABASE_PORT')),
                username: configService.get<string>('DATABASE_USER_NAME'),
                password: configService.get<string>('DATABASE_PASSWORD'),
                database: configService.get<string>('DATABASE_NAME'),
                autoLoadEntities: true,
                entities: ['../dist/entity/*.entity.{ts,js}'],
                subscribers: ['../dist/entity/*.entity.{ts,js}'],
                migrations: ['../dist/entity/*.entity.{ts,js}'],
                namingStrategy: new SnakeNamingStrategy(),
            } as TypeOrmModuleOptions),
        }),
        AuthModule,
        ApplicationlogoSettingsModule,
        MailModule,
        SystemPropertiesModule,
        // PersonModule,
        RoleModule,
        UserModule,
        ApplanguagesettingModule,
        MachinemasterModule,
        DoctormasterModule,
        EmployeemasterModule,
        BookingentryModule,
        CaseentryModule,
        CasemachineModule,
        RegionmasterModule
    ],


})
export class AppModule { }

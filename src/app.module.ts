import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './module/user/user.module';
import { YysTVModule } from './module/yysTV/yysTV.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '212.64.78.155',
      port: 3306,
      username: 'root',
      password: 'Dj.249575',
      database: 'mwwow_new',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    YysTVModule,
  ],
})
export class AppModule {}

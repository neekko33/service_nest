import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './module/user/user.module';
import { ArticleModule } from './module/article/article.module';
import { TypeModule } from './module/type/type.module';
import { FileModule } from './module/file/file.module';
import { YysTVModule } from './module/yysTV/yysTV.module';
import { MessageModule } from './module/message/message.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '212.64.78.155',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'mwwow',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    ArticleModule,
    TypeModule,
    FileModule,
    YysTVModule,
    MessageModule,
  ],
})
export class AppModule {}

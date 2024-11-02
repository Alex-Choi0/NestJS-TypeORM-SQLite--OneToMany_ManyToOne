// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite', // 사용하는 DBMS종료
      database: `${__dirname.split('/dist')[0]}/../test.db`, // DB의 위치. 실제 root경로/test.db
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // 엔티티 위치
      synchronize: true, // 프로그램이 DB구조 변경 허용(true)
    }),
    UsersModule,
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

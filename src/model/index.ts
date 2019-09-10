import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatEntity } from './cats.entity';

@Global()
@Module({
  imports: [
    // TypeOrmModule.forRoot(mysql),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'weekly',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([CatEntity]),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}

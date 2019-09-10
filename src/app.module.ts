import { Module } from '@nestjs/common';
import { GraphQL } from './graphql';
import { DatabaseModule } from './model';

@Module({
  imports: [
    GraphQL,
    DatabaseModule,
  ],
})
export class AppModule {}

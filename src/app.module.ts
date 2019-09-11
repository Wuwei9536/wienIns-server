import { Module } from '@nestjs/common';
import { GraphQL } from './graphql';
import { DatabaseModule } from './model';
import { HealthcheckModule } from './healthcheck/healthcheck.module';

@Module({
  imports: [
    HealthcheckModule,
    GraphQL,
    DatabaseModule,
  ],
})
export class AppModule {}

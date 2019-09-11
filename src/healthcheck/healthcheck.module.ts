import { Module, Global } from '@nestjs/common';

import { HealthcheckController } from './healthcheck.controller';

@Global()
@Module({
  controllers: [HealthcheckController],
})
export class HealthcheckModule {}

import { UseGuards } from '@nestjs/common';
import { GqlJwt, RestfulJwt } from './jwt.guard';

const GqlJwtGuard = UseGuards(GqlJwt);
const RestfulJwtGuard = UseGuards(RestfulJwt);

export { GqlJwtGuard, RestfulJwtGuard };

import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';

/* GraphQL的jwt校验 */
@Injectable()
export class GqlJwt extends AuthGuard('jwt') {
  getRequest(context) {
    return GqlExecutionContext.create(context).getContext().req;
  }
}

/* Restful的jwt校验 */
@Injectable()
export class RestfulJwt extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();
    req.headers.authorization = req.cookies.USER_AUTH;
    return super.canActivate(context);
  }
}

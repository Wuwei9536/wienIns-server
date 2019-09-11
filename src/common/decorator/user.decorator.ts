import { createParamDecorator } from '@nestjs/common';
import { JwtPayload } from '../auth/jwt-payload.interface';

export const JwtUser = createParamDecorator((data, [root, args, ctx, info]) => {
  return ctx.req.user as JwtPayload;
});

export const JwtUserId = createParamDecorator(
  (data, [root, args, ctx, info]) => {
    return Number(ctx.req.user.userId);
  },
);

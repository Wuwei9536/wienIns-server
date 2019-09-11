import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { GqlExceptionFilter, GqlArgumentsHost } from '@nestjs/graphql';
import { errorLogger } from '../middleware';
const FlakeId = require('flakeid'); // 未安装

// (暂时无用)
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();
    return response.status(status).json({
      statusCode: exception.getStatus(),
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}

@Catch(HttpException)
export class GqlHttpExceptionFilter implements GqlExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const response = exception.getResponse();
    const status = exception.getStatus();
    const flake = new FlakeId({
      mid: 8,
    });
    const uniqueId: number = flake.gen();
    errorLogger.addContext('errorId', uniqueId);
    errorLogger.error(exception);
    const newException =
      typeof response === 'object'
        ? new HttpException(
            {
              ...response,
              errorId: uniqueId,
            },
            status,
          )
        : new HttpException(
            {
              error: response,
              statusCode: status,
              errorId: uniqueId,
            },
            status,
          );
    return newException;
  }
}

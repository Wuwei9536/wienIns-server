import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      /* 上下文函数，每次命中Gql请求都会执行 */
      context: ({ req, res }) => {
        // req.headers.authorization = req.cookies.USER_AUTH;
        return { req, res };
      },
      /* Graphql SDL 模式定义  */
      typePaths: ['src/graphql/**/*.graphql'],
      /* 使用抽象语法树（AST）自动生成TS定义 */
      definitions: {
        /* 输出位置 */
        path: join(process.cwd(), 'src/schema.ts'),
        /* 输出类型 */
        outputAs: 'class',
      },
      /* 是否安装订阅功能 */
      installSubscriptionHandlers: false,
      /* mock */
      mocks: false,
    }),
    /* Graphql 默认全局范围内搜索解析器 */
    CatsModule,
  ],
})
export class GraphQL {}

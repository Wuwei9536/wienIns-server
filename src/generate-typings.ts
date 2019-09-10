/*
根据模式 输出Ts接口
cmd:ts-node generate-typings
*/

import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['src/**/*.graphql'],
  path: join(process.cwd(), 'src/schema.ts'),
  outputAs: 'class',
  /* 文件监听模式（在任何 .graphql 文件更改时自动生成 Typescript） */
  //  watch: true,
});

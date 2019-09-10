import { ParseIntPipe, UseGuards, UseInterceptors } from '@nestjs/common';
import {
  Args,
  Mutation,
  Query,
  Resolver,
  Subscription,
  Context,
} from '@nestjs/graphql';
// import { Timeout } from '../../common/interceptor';

import { Cat } from '../../schema';
import { CatsService } from './cats.service';

// @UseInterceptors(Timeout)
@Resolver('Cat')
export class CatsResolvers {
  constructor(private readonly catsService: CatsService) {}

  @Query()
  async getCats(@Context('req') ctx) {
    return await this.catsService.findAll();
  }

  @Query('cat')
  async findOneById(
    @Args('id', ParseIntPipe)
    id: number,
    @Context() ctx,
  ): Promise<Cat> {
    return await this.catsService.findOne(id);
  }

  @Mutation('createCat')
  async create(@Args('createCatInput') args, @Context() ctx): Promise<Cat> {
    const createdCat = await this.catsService.create(args);
    return createdCat;
  }
  @Mutation('deleteCat')
  async delete(@Args('deleteCatInput') args): Promise<Cat> {
    const deleteCat = await this.catsService.delete(args);
    return deleteCat;
  }

  @Mutation('updateCat')
  async update(@Args('updateCatInput') args): Promise<Cat> {
    const updateCat = await this.catsService.update(args);
    return updateCat;
  }
}

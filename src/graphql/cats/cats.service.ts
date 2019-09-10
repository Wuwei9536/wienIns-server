import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Cat } from '../../schema';
import { Cat as CatEntity } from '../../model/cats.entity';
import { Repository } from 'typeorm';
@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(CatEntity)
    private readonly cats: Repository<CatEntity>,
  ) {}
  // 增
  async create(cat: Cat): Promise<Cat> {
    const res = this.cats.create(cat);
    let result = await this.cats.save(res);
    return result;
  }

  // 删
  async delete(arg): Promise<Cat> {
    const result = await this.cats.findOne({ id: arg.id });
    const res = await this.cats
      .createQueryBuilder()
      .delete()
      .from(CatEntity)
      .where('id = :id', arg)
      .execute();
    return result;
  }

  // 改
  async update(arg): Promise<Cat> {
    const result = await this.cats.findOne({ id: arg.id });
    // console.log(result);
    result.name = arg.name;
    result.age = arg.age;
    const aa = await this.cats.save(result);
    return aa;
  }
  // 查全部
  async findAll(): Promise<Cat[]> {
    return await this.cats.find();
  }

  // 查一个
  async findOne(id: number): Promise<Cat> {
    return this.cats.findOne({ id });
  }
}

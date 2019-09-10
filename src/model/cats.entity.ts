import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';

/* cats对应数据库表名  */
@Entity('cats')
/* CatEntity 是 sql 语句检索数据库时 cats的别名（如未特别指定）*/
export class CatEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @Column('varchar', {
    nullable: false,
    name: 'name',
  })
  name: string;

  @Column('int', {
    nullable: false,
    name: 'age',
  })
  age: number;

  @Column('varchar', {
    nullable: false,
    name: 'address',
  })
  address: string;

  @Column('timestamp', {
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'create_time',
  })
  createTime: Date | null;

  @Column('timestamp', {
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'update_time',
  })
  updateTime: Date | null;
}

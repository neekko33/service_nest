import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';
import { type } from 'os';
import { Type } from '../type/type.entity';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  content?: string;

  @Column('text')
  introduce: string;

  @Column({ type: 'bigint' })
  addTime: number;

  @Column()
  typeId: number;

  @Column()
  userId: number;

  @ManyToOne(
    type => User,
    user => user.articles,
  )
  user: User;

  @ManyToOne(
    type => Type,
    type => type.articles,
  )
  type: Type;
}

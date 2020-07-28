import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

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
}

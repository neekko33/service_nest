import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class YysTV {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  title: string;

  @Column('text')
  href: string;

  @Column('text')
  bg: string;
}

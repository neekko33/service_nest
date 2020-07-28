import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'bigint' })
  createTime: number;

  @Column()
  content: string;

  @Column()
  editorName: string;
}

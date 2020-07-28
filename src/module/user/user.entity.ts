import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ comment: '用户id' })
  id: number;

  @Column({ length: 50, comment: '用户名' })
  username: string;

  @Column({ comment: '用户密码' })
  password: string;

  @Column({ type: 'text', comment: '用户头像' })
  avatar: string;

  @Column({ length: 50, comment: '昵称' })
  nickname: string;

  @Column({ length: 50, comment: '标签' })
  tags: string;

  @Column({ length: 50, comment: '地址' })
  address: string;

  @Column({ length: 100, comment: '简介' })
  introduce: string;
}

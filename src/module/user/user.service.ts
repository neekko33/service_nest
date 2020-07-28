import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  // 查找所有用户
  async findAll(): Promise<User[]> {
    return await this.usersRepository
      .createQueryBuilder('user')
      .select([
        'user.id',
        'user.username',
        'user.nickname',
        'user.tags',
        'user.address',
        'user.introduce',
      ])
      .getMany();
  }
  // 查找目标用户
  async findOne(id: string): Promise<User> {
    return await this.usersRepository
      .createQueryBuilder('user')
      .select([
        'user.id',
        'user.username',
        'user.nickname',
        'user.tags',
        'user.address',
        'user.introduce',
      ])
      .where('user.id=:id', { id })
      .getOne();
  }
}

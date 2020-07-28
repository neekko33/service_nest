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
    return await this.usersRepository.find();
  }

  // 查找目标用户
  async findOne(id: string): Promise<User> {
    return await this.usersRepository.findOne(id);
  }
}

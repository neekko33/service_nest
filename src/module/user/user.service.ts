import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { isNil } from '@nestjs/common/utils/shared.utils';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}
  async login(user: User): Promise<User[]> {
    return await this.usersRepository.query(
      `SELECT id,username,avatar FROM user WHERE username='${user.username}' AND password='${user.password}';`,
    );
  }
  async findAll(): Promise<User[]> {
    return await this.usersRepository.query(`SELECT id,username FROM user`);
  }
  async find(id: string): Promise<User> {
    return await this.usersRepository.query(
      `SELECT id,username,avatar FROM user WHERE id=${id}`,
    );
  }
  async update(id: string, user: User): Promise<void> {
    let sql = 'UPDATE user SET ';
    if (user.username != '') {
      sql += `username='${user.username}' `;
    }
    if (user.password != '') {
      sql += `password='${user.password}' `;
    }
    sql += `WHERE id=${id}`;
    await this.usersRepository.query(sql);
  }
  async uploadAvatar(id: string, url: string): Promise<void> {
    await this.usersRepository.query(
      `UPDATE user SET avatar='${url}' WHERE id=${id}`,
    );
  }
}

import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateUserDto, LoginDto, PasswordChangeDto } from './create_user.dto';

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

  // 新增用户
  async create(u: CreateUserDto): Promise<void> {
    const {
      username,
      password,
      avatar,
      nickname,
      tags,
      address,
      introduce,
    } = u;
    await this.usersRepository
      .createQueryBuilder()
      .insert()
      .into(User)
      .values({
        username,
        password: () => `MD5(${password})`,
        avatar,
        nickname,
        tags,
        address,
        introduce,
      })
      .execute();
  }

  // 删除用户
  async delete(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  // 用户登录
  async login(u: LoginDto): Promise<User> {
    const { username, password } = u;
    return await this.usersRepository
      .createQueryBuilder('u')
      .where('u.username=:username', { username })
      .andWhere('u.password=MD5(:password)', { password })
      .getOne();
  }

  // 修改密码
  async changePassword(
    id: string,
    u: PasswordChangeDto,
  ): Promise<UpdateResult> {
    const { password, newPassword } = u;
    return await this.usersRepository
      .createQueryBuilder()
      .update(User)
      .set({ password: newPassword })
      .where('user.id=:id', { id })
      .andWhere('user.password=MD5(:password)', { password })
      .execute();
  }
}

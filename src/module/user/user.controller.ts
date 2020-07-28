import {
  Controller,
  HttpException,
  HttpStatus,
  Get,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('/api/v5/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 获取用户列表
  @Get()
  async getUserList(): Promise<User[]> {
    try {
      return await this.userService.findAll();
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  // 获取指定用户信息
  @Get(':id')
  async getUser(@Param('id') id: string): Promise<User> {
    try {
      return await this.userService.findOne(id);
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

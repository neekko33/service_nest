import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Get,
  Param,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/api/v3/login')
  async login(@Body() body: User): Promise<User[]> {
    try {
      const userInfo = await this.userService.login(body);
      if (userInfo.length > 0) {
        return userInfo;
      } else {
        throw new HttpException('登陆失败', HttpStatus.FORBIDDEN);
      }
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Get('/api/v3/user')
  async getUserList(): Promise<User[]> {
    try {
      return await this.userService.findAll();
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Get('/api/v3/user/:id')
  async getUser(@Param('id') id: string): Promise<User> {
    try {
      return await this.userService.find(id);
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Post('/api/v3/user/:id')
  async updateUser(@Param('id') id: string, @Body() body: User): Promise<void> {
    try {
      await this.userService.update(id, body);
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Post('/api/v3/avatar/:id')
  @UseInterceptors(FileInterceptor('file'))
  async upload(@Param('id') id: string, @UploadedFile() file): Promise<string> {
    const url = `http://212.64.78.155/images/avatar/${file.filename}`;
    try {
      await this.userService.uploadAvatar(id, url);
      return url;
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

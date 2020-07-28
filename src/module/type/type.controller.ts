import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Delete,
  Param,
  Put,
  Get,
} from '@nestjs/common';
import { TypeService } from './type.service';
import { Type } from './type.entity';

@Controller()
export class TypeController {
  constructor(private readonly typeService: TypeService) {}
  @Post('/api/v3/type')
  async addType(@Body('typeName') typename: string): Promise<void> {
    try {
      await this.typeService.create(typename);
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Delete('/api/v3/type/:id')
  async deleteType(@Param('id') id: string): Promise<void> {
    try {
      await this.typeService.delete(id);
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Put('/api/v3/type/:id')
  async updateType(
    @Param('id') id: string,
    @Body('typeName') typeName: string,
  ): Promise<void> {
    try {
      await this.typeService.update(id, typeName);
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Get('/api/v3/type')
  async getType(): Promise<Type[]> {
    try {
      return await this.typeService.findAll();
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

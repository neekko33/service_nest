import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Type } from './type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TypeService {
  constructor(
    @InjectRepository(Type)
    private readonly typeRepository: Repository<Type>,
  ) {}
  async create(typeName: string): Promise<void> {
    await this.typeRepository.query(
      `INSERT INTO type VALUES(null,'${typeName}');`,
    );
  }
  async delete(id: string): Promise<void> {
    await this.typeRepository.query(`DELETE FROM type WHERE id=${id};`);
  }
  async update(id: string, typeName: string): Promise<void> {
    await this.typeRepository.query(
      `UPDATE type SET typeName='${typeName}' WHERE id=${id}`,
    );
  }
  async findAll(): Promise<Type[]> {
    return await this.typeRepository.query('SELECT * FROM type');
  }
}

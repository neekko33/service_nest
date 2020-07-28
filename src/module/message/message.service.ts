import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './message.entity';
import { getConnection, Repository } from 'typeorm';
import { CreateMessageDto } from './message.dto';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}
  async create(c: CreateMessageDto): Promise<void> {
    try {
      await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Message)
        .values({
          createTime:c.createTime,
          content:c.content,
          editorName:c.editorName
        })
        .execute()
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  async delete(id: string): Promise<void> {
    try {
      await this.messageRepository.query(`DELETE FROM message WHERE id=${id};`);
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  async findAll(): Promise<Message> {
    try {
      return this.messageRepository.query(
        'SELECT * FROM message ORDER BY id DESC;',
      );
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

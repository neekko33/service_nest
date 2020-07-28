import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Article } from './article.entity';
import { CreateArticleDto } from './create-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}
  async create(a: CreateArticleDto): Promise<void> {
    try {
      await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Article)
        .values([
          {
            typeId: a.typeId,
            title: a.title,
            content: a.content,
            introduce: a.introduce,
            addTime: a.addTime,
            userId: a.userId,
          },
        ])
        .execute();
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  async delete(id: string): Promise<void> {
    try {
      await this.articleRepository.query(`DELETE FROM article WHERE id=${id}`);
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  async update(id: string, a: CreateArticleDto): Promise<void> {
    try {
      await getConnection()
        .createQueryBuilder()
        .update(Article)
        .set({
          typeId: a.typeId,
          title: a.title,
          content: a.content,
          introduce: a.introduce,
          addTime: a.addTime,
          userId: a.userId,
        })
        .where('id = :id', { id: id })
        .execute();
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  async findAll(): Promise<Article[]> {
    const sql =
      `SELECT article.id as id,article.title as title,article.introduce as introduce,` +
      `article.addTime as addTime,type.typeName as typeName,user.username as username ` +
      `FROM article LEFT JOIN type ON article.typeId=type.id LEFT JOIN user ON ` +
      `article.userId=user.id ORDER BY article.id DESC`;
    try {
      return await this.articleRepository.query(sql);
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  async findId(id: string): Promise<Article> {
    const sql =
      `SELECT article.id as id,article.title as title,article.introduce as introduce,` +
      `article.content as content,article.typeId as typeId,article.userId as userId,` +
      `article.addTime as addTime,type.typeName as typeName,user.username as username ` +
      `FROM article LEFT JOIN type ON article.typeId=type.id LEFT JOIN user ON ` +
      `article.userId=user.id WHERE article.id=${id} ORDER BY article.id DESC`;
    try {
      return await this.articleRepository.query(sql);
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  async findType(id:string):Promise<Article[]> {
    const sql =
      `SELECT article.id as id,article.title as title,article.introduce as introduce,` +
      `article.addTime as addTime,type.typeName as typeName,user.username as username ` +
      `FROM article LEFT JOIN type ON article.typeId=type.id LEFT JOIN user ON ` +
      `article.userId=user.id WHERE article.typeId=${id} ORDER BY article.id DESC`;
    try {
      return await this.articleRepository.query(sql);
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

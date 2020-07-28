import {
  Controller,
  Post,
  Body,
  Delete,
  Param,
  Put,
  Get, Query,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './create-article.dto';
import { Article } from './article.entity';

@Controller()
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}
  @Post('/api/v3/article')
  addArticle(@Body() createArticleDto: CreateArticleDto): Promise<void> {
    return this.articleService.create(createArticleDto);
  }
  @Delete('/api/v3/article/:id')
  deleteArticle(@Param('id') id: string): Promise<void> {
    return this.articleService.delete(id);
  }
  @Put('/api/v3/article/:id')
  updateArticle(
    @Param('id') id: string,
    @Body() createArticleDto: CreateArticleDto,
  ): Promise<void> {
    return this.articleService.update(id, createArticleDto);
  }
  @Get('/api/v3/article')
  getArticle(@Query('typeId') typeId:string): Promise<Article[]> {
    if (!typeId){
      return this.articleService.findAll();
    }else{
      return this.articleService.findType(typeId)
    }
  }
  @Get('/api/v3/article/:id')
  getArticleById(@Param('id') id: string): Promise<Article> {
    return this.articleService.findId(id);
  }
}

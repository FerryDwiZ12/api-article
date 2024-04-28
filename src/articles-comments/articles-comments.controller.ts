// article-comments.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  UseGuards,
  Body,
} from '@nestjs/common';
import { ArticleCommentsService } from '../articles-comments/articles-comments.service';
// import { AuthGuard } from '../auth/auth/auth.guard';
import { ArticleComment } from '@prisma/client';
import { Public } from 'src/helpers/decorectors/public.decorector';

@Controller('article-comments')
export class ArticleCommentsController {
  constructor(
    private readonly articleCommentsService: ArticleCommentsService,
  ) {}

  @Public()
  @Get()
  async findAll() {
    return this.articleCommentsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.articleCommentsService.findOne(+id);
  }

  @Post()
  async create(@Body() articleComment: ArticleComment) {
    return this.articleCommentsService.create(articleComment);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() articleComment: ArticleComment,
  ) {
    return this.articleCommentsService.update(+id, articleComment);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.articleCommentsService.delete(+id);
  }
}

// article-categories.controller.ts
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
import { ArticleCategoriesService } from './articles-category.service';
// import { AuthGuard } from '../auth/auth/auth.guard';
import { ArticleCategory } from '@prisma/client';
import { Roles } from 'src/helpers/decorectors/roles.decorector';
import { Role } from 'src/auth/auth/role.enum';
import { Public } from 'src/helpers/decorectors/public.decorector';


@Controller('article-categories')
export class ArticleCategoriesController {
  constructor(
    private readonly articleCategoriesService: ArticleCategoriesService,
  ) {}
  
  @Public()
  @Get()
  async findAll() {
    return this.articleCategoriesService.findAll();
  }

  @Public()
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.articleCategoriesService.findOne(+id);
  }

  @Roles(Role.ADMIN)
  @Post()
  async create(@Body() articleCategory: ArticleCategory) {
    return this.articleCategoriesService.create(articleCategory);
  }

  @Roles(Role.ADMIN)
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() articleCategory: ArticleCategory,
  ) {
    return this.articleCategoriesService.update(+id, articleCategory);
  }

  @Roles(Role.ADMIN)
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.articleCategoriesService.delete(+id);
  }
}

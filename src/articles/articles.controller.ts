// articles.controller.ts
import { Controller, Get, Post, Put, Delete, Param, UseGuards, Body } from '@nestjs/common';
import { ArticlesService } from './articles.service';
// import { AuthGuard } from '../auth/auth/auth.guard';
import { Article } from '@prisma/client';
import { Public } from 'src/helpers/decorectors/public.decorector';
import { Roles } from 'src/helpers/decorectors/roles.decorector';
import { Role } from 'src/auth/auth/role.enum';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}
  
  @Public()
  @Get()
  async findAll() {
    return this.articlesService.findAll();
  }
  
  @Public()
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.articlesService.findOne(+id);
  }
  
  @Roles(Role.ADMIN)
  @Post()
  async create(@Body() article: Article) {
    return this.articlesService.create(article);
  }

  @Roles(Role.ADMIN)
  @Put(':id')
  async update(@Param('id') id: number, @Body() article: Article) {
    return this.articlesService.update(+id, article);
  }

  @Roles(Role.ADMIN)
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.articlesService.delete(+id);
  }
}
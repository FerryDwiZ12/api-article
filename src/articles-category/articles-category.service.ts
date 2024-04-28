// article-categories.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
// import { AuthGuard } from '../auth/auth/auth.guard';
import { ArticleCategory } from '@prisma/client';

@Injectable()
export class ArticleCategoriesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(articleCategory: ArticleCategory) {
    return this.prismaService.articleCategory.create({ data: articleCategory });
  }

  async findAll() {
    return this.prismaService.articleCategory.findMany();
  }

  async findOne(id: number) {
    return this.prismaService.articleCategory.findUnique({ where: { id } });
  }

  async update(id: number, articleCategory: ArticleCategory) {
    return this.prismaService.articleCategory.update({ where: { id }, data: articleCategory });
  }

  async delete(id: number) {
    return this.prismaService.articleCategory.delete({ where: { id } });
  }
}
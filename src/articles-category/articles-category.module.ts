// article-categories.module.ts
import { Module } from '@nestjs/common';
import { ArticleCategoriesController } from '../articles-category/articles-category.controller';
import { PrismaService } from '../prisma/prisma.service';
// import { AuthGuard } from '../auth/auth/auth.guard';
import { ArticleCategoriesService } from '../articles-category/articles-category.service';

@Module({
  providers: [ArticleCategoriesService, PrismaService],
  controllers: [ArticleCategoriesController],
})
export class ArticleCategoriesModule {}
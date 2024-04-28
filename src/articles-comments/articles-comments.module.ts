// article-comments.module.ts
import { Module } from '@nestjs/common';
import { ArticleCommentsController } from '../articles-comments/articles-comments.controller';
import { ArticleCommentsService } from '../articles-comments/articles-comments.service';
import { PrismaService } from '../prisma/prisma.service';
// import { AuthGuard } from '../auth/auth/auth.guard';

@Module({
  providers: [ArticleCommentsService, PrismaService],
  controllers: [ArticleCommentsController],
})
export class ArticleCommentsModule {}
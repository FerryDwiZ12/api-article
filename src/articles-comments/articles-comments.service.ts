// article-comments.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
// import { AuthGuard } from '../auth/auth/auth.guard';
import { ArticleComment } from '@prisma/client';

@Injectable()
export class ArticleCommentsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(articleComment: ArticleComment) {
    return this.prismaService.articleComment.create({ data: articleComment });
  }

  async findAll() {
    return this.prismaService.articleComment.findMany();
  }

  async findOne(id: number) {
    return this.prismaService.articleComment.findUnique({ where: { id } });
  }

  async update(id: number, articleComment: ArticleComment) {
    return this.prismaService.articleComment.update({ where: { id }, data: articleComment });
  }

  async delete(id: number) {
    return this.prismaService.articleComment.delete({ where: { id } });
  }
}
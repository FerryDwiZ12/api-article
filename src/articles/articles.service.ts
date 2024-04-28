// articles.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
// import { AuthGuard } from '../auth/auth/auth.guard';
import { Article } from '@prisma/client';

@Injectable()
export class ArticlesService {
  constructor(
    private readonly prismaService: PrismaService,
  ) {}

  async create(article: Article) {
    return this.prismaService.article.create({ data: article });
  }

  async findAll() {
    return this.prismaService.article.findMany({
      include: {
        category: {
            select : {
                name : true
            }
        },
        user: {
          select: {
            name: true,
          },
        },
        comments : {
            select : {
                content : true,
                userId : true
            }
        }
      },
    });
  }

  async findOne(id: number) {
    return this.prismaService.article.findUnique({ where: { id } });
  }

  async update(id: number, article: Article) {
    return this.prismaService.article.update({ where: { id }, data: article });
  }

  async delete(id: number) {
    return this.prismaService.article.delete({ where: { id } });
  }
}

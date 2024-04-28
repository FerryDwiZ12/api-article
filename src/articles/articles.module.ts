// articles.module.ts
import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { PrismaService } from '../prisma/prisma.service';
// import { AuthGuard } from '../auth/auth/auth.guard';

@Module({
  providers: [ArticlesService, PrismaService],
  controllers: [ArticlesController],
})
export class ArticlesModule {}
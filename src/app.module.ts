import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ArticlesModule } from './articles/articles.module';
import { ArticleCategoriesModule} from './articles-category/articles-category.module';
import { ArticleCommentsModule} from './articles-comments/articles-comments.module';


@Module({
  imports: [UsersModule, ArticlesModule, ArticleCategoriesModule, ArticleCommentsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

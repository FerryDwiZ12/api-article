import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesCategoryController } from './articles-category.controller';

describe('ArticlesCategoryController', () => {
  let controller: ArticlesCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticlesCategoryController],
    }).compile();

    controller = module.get<ArticlesCategoryController>(ArticlesCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { HttpModule, HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { GithubController } from './github.controller';
import { GithubModule } from './github.module';
import { GithubService } from './github.service';

describe('GithubController', () => {
  let controller: GithubController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, GithubModule],
      controllers: [GithubController],
      providers: [GithubService, {
        provide: HttpService,
        useValue: {}
      }],
    }).compile();

    controller = module.get<GithubController>(GithubController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

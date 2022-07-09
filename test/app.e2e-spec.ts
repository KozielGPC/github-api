import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should return user github details', () => {
    const data = { "login": "KozielGPC", "id": 37910437, "node_id": "MDQ6VXNlcjM3OTEwNDM3", "avatar_url": "https://avatars.githubusercontent.com/u/37910437?v=4", "gravatar_id": "", "url": "https://api.github.com/users/KozielGPC", "html_url": "https://github.com/KozielGPC", "followers_url": "https://api.github.com/users/KozielGPC/followers", "following_url": "https://api.github.com/users/KozielGPC/following{/other_user}", "gists_url": "https://api.github.com/users/KozielGPC/gists{/gist_id}", "starred_url": "https://api.github.com/users/KozielGPC/starred{/owner}{/repo}", "subscriptions_url": "https://api.github.com/users/KozielGPC/subscriptions", "organizations_url": "https://api.github.com/users/KozielGPC/orgs", "repos_url": "https://api.github.com/users/KozielGPC/repos", "events_url": "https://api.github.com/users/KozielGPC/events{/privacy}", "received_events_url": "https://api.github.com/users/KozielGPC/received_events", "type": "User", "site_admin": false, "name": "Márcio Gabriel", "company": "UZUM ™ ", "blog": "", "location": "Campo Mourão - PR", "email": null, "hireable": null, "bio": null, "twitter_username": null, "public_repos": 18, "public_gists": 0, "followers": 29, "following": 37, "created_at": "2018-03-29T17:23:24Z", "updated_at": "2022-07-06T19:42:51Z" }
    return request(app.getHttpServer()).get('/api/users/kozielgpc/details')
      .expect(data)
  })

  it('should return status 500', () => {
    return request(app.getHttpServer()).get('/api/users/kozielgggggpc/details')
      .expect(500)
  })
});

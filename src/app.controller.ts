import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('users')
  async listUsers(@Query() query: { since: number }) {

    return this.appService.listUsers(query.since);
  }

  @Get('users/:username/details')
  async userDetails(@Param() param: { username: string }) {
    return this.appService.userDetails(param.username);
  }

  @Get('users/:username/repos')
  async userRepos(@Param() param: { username: string }) {
    return this.appService.userRepos(param.username);
  }
}

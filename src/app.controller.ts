import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('users')
  listUsers(@Query() query: { since: number }): number {

    return this.appService.listUsers(query.since);
  }

  @Get('users/:username/details')
  userDetails(@Param() param: { username: string }) {
    return this.appService.userDetails(param.username);
  }

  @Get('users/:username/repos')
  userRepos(@Param() param: { username: string }): any {
    return this.appService.userRepos(param.username);
  }
}

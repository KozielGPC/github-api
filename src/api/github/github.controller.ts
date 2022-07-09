import { Controller, Get, Param, Query } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('api')
export class GithubController {
    constructor(private readonly githubService: GithubService) { }

    @Get('users')
    async listUsers(@Query() query: { since: number }) {
        return this.githubService.listUsers(query.since);
    }

    @Get('users/:username/details')
    async userDetails(@Param() param: { username: string }) {
        return this.githubService.userDetails(param.username);
    }

    @Get('users/:username/repos')
    async userRepos(@Param() param: { username: string }) {
        return this.githubService.userRepos(param.username);
    }
}

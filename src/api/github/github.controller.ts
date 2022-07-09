import { Controller, Get, Param, Query } from '@nestjs/common';
import { ListUsers } from './dtos/list-users-dto';
import { UserDetails } from './dtos/user-details-dto';
import { UserRepos } from './dtos/user-repos-dto';
import { GithubService } from './github.service';

@Controller('api')
export class GithubController {
    constructor(private readonly githubService: GithubService) { }

    @Get('users')
    async listUsers(@Query() query: { since: number }): Promise<ListUsers> {
        return this.githubService.listUsers(query.since);
    }

    @Get('users/:username/details')
    async userDetails(@Param() param: { username: string }): Promise<UserDetails> {
        return this.githubService.userDetails(param.username);
    }

    @Get('users/:username/repos')
    async userRepos(@Param() param: { username: string }): Promise<UserRepos> {
        return this.githubService.userRepos(param.username);
    }
}

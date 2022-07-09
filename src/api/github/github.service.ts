import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, map } from 'rxjs';

@Injectable()
export class GithubService {
    constructor(private readonly httpService: HttpService) { }

    async listUsers(since) {
        const url = `https://api.github.com/users?since=${since}&per_page=1`;
        const { data } = await firstValueFrom(this.httpService.get(url));
        const nextPage = `http://localhost:3000/api/users?since=${parseInt(since) + 10}&per_page=10`;
        return { nextPage, data };
    }

    async userDetails(username) {
        const url = `https://api.github.com/users/${username}`;
        const { data } = await firstValueFrom(this.httpService.get(url));
        return data;
    }

    async userRepos(username) {
        const url = `https://api.github.com/users/${username}/repos`;
        const { data } = await firstValueFrom(this.httpService.get(url));
        return data;
    }
}

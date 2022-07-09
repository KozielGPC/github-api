import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, map } from 'rxjs';

@Injectable()
export class GithubService {
    constructor(private readonly httpService: HttpService) { }

    async listUsers(since) {
        const url = `https://api.github.com/users?since=${since}&per_page=1`;
        const { data } = await firstValueFrom(this.httpService.get(url));
        const nextPage = `http://localhost:3000/api/users?since=${parseInt(since) + 1}&per_page=1`;
        return { nextPage, data };
    }

    async userDetails(name) {
        const url = `https://api.github.com/users/${name}`;
        const { data } = await firstValueFrom(this.httpService.get(url));
        return data;
    }

    async userRepos(name) {
        const url = `https://api.github.com/users/${name}/repos`;
        const { data } = await firstValueFrom(this.httpService.get(url));
        return data;
    }
}

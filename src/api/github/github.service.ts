import { HttpException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { UserDetails } from './dtos/user-details-dto';
import { UserRepos } from './dtos/user-repos-dto';
import { ListUsers } from './dtos/list-users-dto';
import { Users } from './dtos/users-dto';

@Injectable()
export class GithubService {

    constructor(private readonly httpService: HttpService) { require('dotenv').config(); }

    async listUsers(since): Promise<ListUsers> {
        if (parseInt(since) < 0) {
            since = 0;
        }
        const url = `https://api.github.com/users?since=${since}&per_page=10`;
        const { data }: { data: Users } = await firstValueFrom(this.httpService.get(url, { headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } }).pipe(
            catchError(e => {
                switch (e.response.status) {
                    case 401:
                        throw new HttpException("Github token is invalid", 401);
                    default:
                        throw new HttpException(e.response.data, e.response.status);
                }
            })));

        const api_url = process.env.API_URL;
        const next_page = `${api_url}/api/users?since=${parseInt(since) + 10}&per_page=10`;
        return { next_page, data };
    }

    async userDetails(username): Promise<UserDetails> {
        const url = `https://api.github.com/users/${username}`;
        const { data }: { data: UserDetails } = await firstValueFrom(this.httpService.get(url, { headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } })
            .pipe(
                catchError(e => {
                    switch (e.response.status) {
                        case 404:
                            throw new HttpException("User with this username could not be found", 404);
                        case 401:
                            throw new HttpException("Github token is invalid", 401);
                        default:
                            throw new HttpException(e.response.data, e.response.status);
                    }
                })));
        return data;
    }

    async userRepos(username): Promise<UserRepos> {
        const url = `https://api.github.com/users/${username}/repos`;
        const { data }: { data: UserRepos } = await firstValueFrom(this.httpService.get(url, { headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } }).pipe(
            catchError(e => {
                switch (e.response.status) {
                    case 404:
                        throw new HttpException("User with this username could not be found", 404);
                    case 401:
                        throw new HttpException("Github token is invalid", 401);
                    default:
                        throw new HttpException(e.response.data, e.response.status);
                }
            })));
        return data;
    }
}

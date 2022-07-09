import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom, map } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) { }

  listUsers(number): number {
    return number;
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

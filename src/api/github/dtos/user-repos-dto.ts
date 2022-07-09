import { Endpoints } from "@octokit/types";
export type UserRepos = Endpoints["GET /users/{username}/repos"]["response"]["data"];
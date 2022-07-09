import { Endpoints } from "@octokit/types";
export type UserDetails = Endpoints["GET /users/{username}"]["response"]["data"];

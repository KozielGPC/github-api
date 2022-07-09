## Description

REST API developed to consume the GitHub API, using NodeJS with NestJS, and Jest for e2e tests

## Live demo

https://github-api-sap.herokuapp.com

## EndPoints

- GET - /api/users?since={number} - This endpoint must return a list of GitHub users and the link for the next page.

- GET - /api/users/:username/details - This endpoint must return the details of a GitHub user

- GET - /api/users/:username/repos - This endpoint must return a list with all user repositories

## Installation

```bash
$ npm install
```
## Set Enviroment

```bash
$ cp .env.example .env
```

Set your API link in `API_URL`
- example: http://localhost:3000

## Running the app

```bash

$ npm run start:dev

```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e
```

## Description

REST API developed to consume the GitHub API <br>
Main Technologies: [NodeJS](https://nodejs.dev) with [NestJS](https://nestjs.com), and [Jest](https://jestjs.io) for e2e and unit tests

## Live demo

https://github-api-sap.herokuapp.com

## EndPoints

- GET - /api/users?since={number} - This endpoint must return a list of GitHub users and the link for the next page.

- GET - /api/users/:username/details - This endpoint must return the details of a GitHub user

- GET - /api/users/:username/repos - This endpoint must return a list with all user repositories


## Docker

Run the app with docker or follow the steps bellow
```bash
$ docker-compose up
```

## Installation

```bash
$ npm install
```
## Set Enviroment

```bash
$ cp .env.example .env
```
Set your [Github Token](https://github.com/settings/tokens) in `GITHUB_TOKEN` <br>
Set your API link in `API_URL`
- example: http://localhost:3000

## Running the app

```bash

$ npm run start:dev

```

## Test

The tests were written following the github api documentation and their possible responses

* Note: `should return the users github informations` test may fail because of `disk_usage` difference

![image](https://user-images.githubusercontent.com/37910437/178146234-bb37bd12-bc43-473f-9b44-1bbc3a7e30a5.png)


```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e
```

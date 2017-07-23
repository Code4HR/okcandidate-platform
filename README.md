# okcandidate-platform
A comprehensive refactor of [OKCandidate](https://github.com/Code4HR/okcandidate/) based on feedback from users and our partners at the Virginian-Pilot.

| Develop branch status |
:-----------------------:
[ ![Codeship Status for Code4HR/okcandidate-platform](https://app.codeship.com/projects/20e942f0-0356-0135-4909-4af64aa74b25/status?branch=develop)](https://app.codeship.com/projects/213312) |

# Setup

## Docker

A few setup steps need to happen before you can run everything in Docker.
First, copy `.env-example` to `.env` to configure the application, then run
`./gen-dev-cert` to create a development certificate chain so you can test
everything over https.

Then you can run `docker-compose up` and you just have to wait for everything to
get started.

Summary:

    cp .env-example .env
    ./gen-dev-cert
    docker-compose up

That will get you started with OkCandidate!

## Database
A local postgres database will need to be created to run okcandidate-platform.  PgAdmin can be used to do this.

## Environment
The following environment variables are expected to be available to the shell in which okcandidate-platform is running.
```bash
export OKC_DB_USER=blaine
export OKC_DB_PASS=''
export OKC_DB_NAME=okcandidate_platform_dev
export OKC_DB_HOST=localhost
export OKC_SESSION_SECRET_KEY=someGobbledygookThatIsAtLeast32CharactersLong
```

## Installation
Clone the project from GitHub and install dependencies.
```bash
git clone git@github.com:Code4HR/okcandidate-platform.git && cd okcandidate-platform
npm install
```

Afterwards, use
```bash
npm start
```
to begin running application locally.

# Fixture Data
In a development environment, some records are generated automatically.

## User Records
These user/pass combinations can be used to login as user of various roles.
```js
  // config/dev-fixtures/user-fixtures.js

  ...

  {
    name: 'A. Voter',
    emailAddress: 'user@gmail.com',
    password: 'leafygreen'
  },
  {
    name: 'A. Candidate',
    emailAddress: 'candidate@gmail.com',
    password: 'mashedpotato'
  },
  {
    name: 'Anne Admin',
    emailAddress: 'admin@okcandidate.org',
    password: 'adminpass'
  }

  ...

```

# Testing

We use mocha and superagent for testing. See the [trails.js](https://trailsjs.io/doc/en/test/) documentation to learn more about writing tests for okcandidate.

## In Docker

If installed with Docker and docker-compose run tests from npm using ` docker-compose exec app  npm run test`.

## On Host Machine

Run using `npm test` as usual



# Contributing
This project follows a loose interpretation of Git flow. Master is production, develop is staging. Each feature gets one branch.  When opening a PR, please open it against the develop branch.

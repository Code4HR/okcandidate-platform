# okcandidate-platform
A comprehensive refactor of [OKCandidate](https://github.com/Code4HR/okcandidate/) based on feedback from users and our partners at the Virginian-Pilot.

| Develop branch status |
:-----------------------:
[ ![Codeship Status for Code4HR/okcandidate-platform](https://app.codeship.com/projects/20e942f0-0356-0135-4909-4af64aa74b25/status?branch=develop)](https://app.codeship.com/projects/213312) |

# Setup

## This Project Uses Docker and Docker Compose

1. Clone the project from GitHub (`git clone ...`)
1. Install Docker, using the steps for **Docker CE** for your specific OS and Edition/Distro via [store.docker.com](https://store.docker.com).
1. NOTE: Don't just install docker from `brew` or `apt-get` etc. You'll get an old or incomplete install.
1. From a shell in the project dir, start both the postgres and node containers with `docker-compose up`.
    1. Add a `-d` to start in the background, e.g. `docker-compose up -d`.
    1. See how the "services" of this 2-tier app are setup in `docker-compose.yml`. We have `app` and `db`.
    1. `docker-compose --help` is your friend.
    1. Use `docker-compose logs app` to see the node logs, for example.
    1. Use `docker-compose exec app bash` to get a bash shell inside the running node container, for example. You can also do that against `db` so you can use the `psql` tool against the database interactively.
    1. To just run a one off psql command, you could do something like this from your host shell: `
    1. When you're done, you can `docker-compose stop` to exit the running containers, or `docker-compose down` to remove the containers, virtual network, and db data.

In Summary:

    clone repo
    Install Docker
    docker-compose up

That will get you started with OkCandidate!

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

## Creating Tests

We use mocha and superagent for testing. See the [trails.js](https://trailsjs.io/doc/en/test/) documentation to learn more about writing tests for okcandidate.

## Running Tests In Docker

Assuming your using `docker-compose`, if nothing is currently up, then you can run tests in a new container with `docker-compose run app npm test`. If you've already started the containers with something like `docker-compose up -d` then you can run tests in that same container with `docker-compose exec app npm test`.

# Contributing
This project follows a loose interpretation of Git flow. Master is production, develop is staging. Each feature gets one branch.  When opening a PR, please open it against the develop branch.

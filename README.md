# okcandidate-platform
A comprehensive refactor of [OKCandidate](https://github.com/Code4HR/okcandidate/) based on feedback from users and our partners at the Virginian-Pilot.

# Setup

## Database
A local postgres database will need to be created to run okcandidate-platform.  PgAdmin can be used to do this.

## Environment
The following environment variables are expected to be available to the shell in which okcandidate-platform is running.
```bash
export OKC_DB_USER=blaine
export OKC_DB_PASSWORD=''
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

# Contributing
This project follows a loose interpretation of Git flow. Master is production, develop is staging. Each feature gets one branch.  When opening a PR, please open it against the develop branch.

# [![<ORG_NAME>](https://circleci.com/gh/Alyahya-A/storefront.svg?style=svg)](LINK) Hosting a Full-Stack Application: Storefront

It's an e-commerce software built with Node.js and Angular

- [Hosting a Full-Stack Application: Storefront](#hosting-a-full-stack-application-storefront)
  - [Docs]()
    - [Infrastructure](docs/infrastructure.md)
    - [Pipeline](docs/pipeline.md)
    - [Dependencies](docs/dependencies.md)
  - [Installation](#installation)
  - [Testing](#testing)
  - [Unit Tests:](#unit-tests)
  - [Built With](#built-with)

## Installation

Provision the necessary AWS services needed for running the application:

1. In AWS, provision a publicly available RDS database running Postgres.
1. In AWS, provision a s3 bucket for hosting the uploaded files.
1. Export the ENV variables needed or use a package like [dotnev](https://www.npmjs.com/package/dotenv)/.
1. From the root of the repo, navigate `api` folder `cd storefront/api` to install the node_modules `npm install`. After installation is done go to Api's [README](/storefront/api/README.md) and follow the instructions.
1. Without closing the terminal in step 1 go back to root of the repo, then navigate to the `web` `cd storefront/web` to intall the node_modules `npm install`. After installation is done start the website in dev mode with `npm run start`.

## Testing

This project contains test. Follow these steps to run the tests.

1. `cd storefront/api`
2. `npm run test`

There are no Unit test on the web app (frontend)

## Unit Tests:

Unit tests are using the Jasmine Framework.

## Built With

- [Angular](https://angular.io/) - Single Page Application Framework
- [Node](https://nodejs.org) - Javascript Runtime
- [Express](https://expressjs.com/) - Javascript API Framework

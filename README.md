![Node.js CI](https://github.com/ayarushin/nestjs-boilerplate/workflows/Node.js%20CI/badge.svg?branch=master)

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) boilerplate with JWT authentication which used RS256 encrypt.

## Structure of project
```bash
.
│   .env            # Environment variables. Ignored file. Make it from .env.template
│   .env.template   # Template file for .env
│   private.pem     # Required file
│   private.pem.pub # Optional
│   public.pem      # Required file
│
├───coverage            # Folder with test coverage results
├───dist                # Compiled application
└───src                 # Source folder
    │   app.module.ts
    │   constants.ts
    │   main.ts
    │   
    ├───components      # Base folder with application components
    │   │   components.module.ts
    │   │   
    │   ├───auth        # Authentication module
    │   │   ├───guards  # Authentication guard
    │   │   │       jwt-auth.guard.ts       # JWT guard will check Authorization header
    │   │   │       local-auth.guard.ts     # Local guard will check payload for the first step of authentication which returns JWT token
    │   │   │       
    │   │   ├───strategies                  # Rules, how guard will validate requests
    │   │   │       jwt.strategy.ts
    │   │   │       local.strategy.ts
    │   │
    │   ├───dashboard                       # Just secured route for checking that authentication works
    │   └───users       # Component which should work with some entity. For example you could add here your DA services for getting users from DB
    │               
    ├───decorators      # Useful decorators
    ├───typings
    └───utils
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## License

  Nest is [MIT licensed](LICENSE).

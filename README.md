# Boilerplate setup guide
- update repo name from `package.json`
- to deploy on **heroku** add this script into package.json
`"heroku-postbuild": "npm run init:both && npm run build"`


## environment variables
on the root add .env including this
```k
  # common
  NODE_ENV = development
  DEBUG = server

  # server
  SECRET = we-are-yalla
  PORT = 8080
  TOKEN_NAME = token
  TOKEN_MAX_AGE = 2592000000

  # database
  DATABASE_URL = postgres://<user_name>:123456@localhost:5432/<db_name>
  DATABASE_URL_TEST = postgres://<user_name>:123456@localhost:5432/<db_name>
```

## Local DB setup
- on Terminal run `psql` or `pgcli`
- `CREATE DATABASE <db_name>;`
- `CREATE USER <user_name> WITH SUPERUSER PASSWORD '<password>'`
- `GRANT ALL PRIVILEGES ON DATABASE <db_name> TO <user_name>`
- update the DATABASE_URL in `.env`

## Sentry setup
for the backend
- get `SENTRY_DNS` from sentry account (for express)
- add it into .env file
- add it into the config

for the frontend
- get `SENTRY_DSN` from sentry account (for react app)
- add it into `/client/.env` `REACT_APP_SENTRY_DSN = <dns>`
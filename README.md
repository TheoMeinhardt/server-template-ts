# server-template-ts
A Webserver template using NodeJS and Express with TypeScript. Connecting to a PostgreSQL Database is achieved using pg.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [License](#license)

## Installation

```bash
# Clone the Github Repo
git clone https://github.com/TheoMeinhardt/server-template-ts.git

```bash
# Install dependencies
npm i --include=dev

`# Setup your .env file according to .env.example
PORT=port your server should listen on
PGHOST=database host
PGUSER=database user
PGDATABASE=database name
PGPASSWORD=database password`

```bash
# Start Webserver in development mode
npm run dev

```bash
# Start Webserver in production mode
npm run build
npm start
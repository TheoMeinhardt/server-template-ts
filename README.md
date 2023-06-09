# server-template-ts
A Webserver template using NodeJS and Express with TypeScript. Connecting to a PostgreSQL Database is achieved using pg.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)

## Installation

```bash
# Clone the Github Repo
git clone https://github.com/TheoMeinhardt/server-template-ts.git
```

```bash
# Install dependencies
npm i --include=dev
```

```
# Setup your .env file according to .env.example
PORT=port your server should listen on
PGHOST=database host
PGUSER=database user
PGDATABASE=database name
PGPASSWORD=database password
```

```bash
# Start Webserver in development mode
npm run dev
```

```bash
# Start Webserver in production mode
npm run build
npm start
```

## Usage
This template is structured according to the MVC Pattern and reasonably extended to enable better overview and sense.
Componets essential for building a basic webserver are

1. **model**: Database calls are in this directory
2. **controllers**: Your request logic is in this directory
3. **routes**: Your API Endpoints are declared here

## License
MIT License

Copyright (c) 2023 Theo Meinhardt

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
# REST API Example

This example shows how to implement a **REST API** using [Express.JS](https://expressjs.com/de/) and Prisma.

## How to use

### 1. Download example & install dependencies

Clone the repository:

```
git clone git@github.com:prisma/prisma-examples.git
```

Install Node dependencies:

```
cd prisma-examples/node/rest-express
npm install
```

### 2. Install the Prisma CLI

To run the example, you need the Prisma CLI. Please install it via NPM or [using another method](https://www.prisma.io/docs/prisma-cli-and-configuration/using-the-prisma-cli-alx4/#installation):

```
npm install -g prisma
```

### 3. Set up database & deploy Prisma datamodel

For this example, you'll use a free _demo database_ (AWS Aurora) hosted in Prisma Cloud. To set up your database, run:

```
prisma deploy
```

Then, follow these steps in the interactive CLI wizard:

1. Select **Demo server**
1. **Authenticate** with Prisma Cloud in your browser
1. Back in your terminal, **confirm all suggested values**

<details>
 <summary>Alternative: Run Prisma locally via Docker</summary>

1. Ensure you have Docker installed on your machine. If not, you can get it from [here](https://store.docker.com/search?offering=community&type=edition).
1. Create `docker-compose.yml` for MySQL (see [here](https://www.prisma.io/docs/prisma-server/database-connector-POSTGRES-jgfr/) for Postgres):
    ```yml
    version: '3'
    services:
      prisma:
        image: prismagraphql/prisma:1.21
        restart: always
        ports:
        - "4466:4466"
        environment:
          PRISMA_CONFIG: |
            port: 4466
            databases:
              default:
                connector: mysql
                host: mysql
                port: 3306
                user: root
                password: prisma
                migrations: true
      mysql:
        image: mysql:5.7
        restart: always
        environment:
          MYSQL_ROOT_PASSWORD: prisma
        volumes:
          - mysql:/var/lib/mysql
    volumes:
      mysql:
    ```
1. Run `docker-compose up -d`
1. Run `prisma deploy`

</details>

### 4. Start the REST API server

```
yarn start
```

The server is now running on `http://localhost:3000`. You can send the API requests implemented in `index.js`, e.g. [`http://localhost:3000/houses`](http://localhost:3000/houses).
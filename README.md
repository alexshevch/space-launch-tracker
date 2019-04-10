# space-launch-tracker
App that lets users view upcoming space launch missions around the world

## Development setup instructions

### Pre-installation requirements
 - Node 10.x or 11.x
 - npm 6.x
 - two terminal tabs/windows

### Setup
1. `npm i` in the root folder of the project to install npm packages for the Server
2. `node server/index.js` to start the Server
3. `cd client && npm i` to install npm packages for the Client
4. `npm run serve` to run the Vue Client in development mode

## Server

Run server with `node server/index.js <PORT> <ENV>` command, where
 - `PORT` is a numeric value that defaults to 3000
 - `ENV` is an environment name, which disallows CORS if set to `production`

### Endpoints

`GET /launches`

Returns a JSON list of upcoming space launches.

Response format:

```
[
    {
        "id": "<launch_id>",
        name: "<launch_name>",
        time: "<launch_time>"
    }
]
```

`GET /launches/:id`

Returns a JSON object with more information about space launch with id `id`

Response format:

```
{
    id: "<launch_id>",
    name: "<launch_name>",
    time: "<launch_time>",
    location: "<launch_location>",
    wikis: {
        location: "<location_wiki_url>",
        agency: "<agency_wiki_url>,
        rocket: "<rocket_wiki_url>"
    }
}
```


## Client

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
# space-launch-tracker
App that lets users view upcoming space launch missions around the world

## Server

Run: `node server/index.js <PORT>`, `PORT` defaults to 3000

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
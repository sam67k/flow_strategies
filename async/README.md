# Flow Strategy Async

- This contains code of backend APIs developed in Node/Express.

## Pre requisites

- Node 18.0

## Install dependencies

```
npm install or npm i
```

## Start Server

```
npm start
```

Or

```
node server | bunyan #install bunyan globally for good formatting of logs
```

## Tail Logs

```
npm run logs
```

## Stop app

```
npm run stop
```

## Lint

```
> npm run lint
> npm run prettier
```

## Config

- For development, define required variables in development.json. _Create a file in the following path if dosen't exists already_ `config/enviroments/development.json`
- For production, define required variables as environment variable in remote setup.

## Contributing

- The `controllers` and `routes` folder should exactly mimic each other. All routers in `routes` should have their corresponding `controllers` file/folder
- All logging should be done using `req.log`. It's a bunyan logger. For model level logging, `req.log` should be passed to underlying layers

# Flow Strategies

This repository contains the codebase for the Flow Strategies project, which consists of three sub-servers. Each sub-server has its own backend APIs developed using Node.js and Express.

## Sub-Servers

1. **Async**

   - Directory: `async`

2. **Callback**

   - Directory: `callback`

3. **Promise**
   - Directory: `promise`

## Pre-Requisites

- Node.js version 18.0 or higher

## Installation

To install dependencies for all sub-servers, run the following command in each sub-server directory:

```sh
cd async
npm install

cd ../callback
npm install

cd ../promi
```

## Starting the Servers

To start each sub-server individually:

```sh
npm run start:sub1
npm run start:sub2
npm run start:sub3
```

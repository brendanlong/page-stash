#!/usr/bin/env node
"use strict";
const yargs = require("yargs");

const config = require("./lib/config");


const args = yargs
    .option("d", {
        alias: "db-uri",
        default: "sqlite://:memory:",
        type: "string",
    })
    .option("p", {
        alias: "port",
        default: 8000,
        type: "number",
    })
    .argv;

config.dbUri = args.dbUri;

const app = require("./lib/app");
const log = require("./lib/log");

app.listen(args.port, () => {
    log.info({port: args.port}, "Listening on port %s", args.port);
});

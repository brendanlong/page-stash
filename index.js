#!/usr/bin/env node
"use strict";
const yargs = require("yargs");

const app = require("./lib/app");


const args = yargs
    .option("p", {
        alias: "port",
        default: 8000,
        type: "number",
    })
    .argv;

app.listen(args.port);

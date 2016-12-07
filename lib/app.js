"use strict";
const koa = require("koa");
const koaBunyanLogger = require("koa-bunyan-logger");

const log = require("./log");


const app = koa();
app.use(koaBunyanLogger(log));

module.exports = app;

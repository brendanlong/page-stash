"use strict";
const koa = require("koa");
const koaBunyanLogger = require("koa-bunyan-logger");

const log = require("./log");
const routes = require("./routes");


const app = koa();
app.use(koaBunyanLogger(log));
app.use(routes);

module.exports = app;

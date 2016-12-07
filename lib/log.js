"use strict";
const bunyan = require("bunyan");


const log = bunyan.createLogger({
    name: "page-stash",
});

module.exports = log;

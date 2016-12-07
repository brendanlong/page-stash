"use strict";
const Sequelize = require("sequelize");

const config = require("./config");
const log = require("./log");


const db = new Sequelize(config.dbUri, {
    logging: config.verbose,
});
if (config.dbUri === "sqlite://:memory:") {
    db.sync().then(() => {
        log.info("Using SQLite memory database");
    });
}

module.exports = db;

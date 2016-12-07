"use strict";
const Sequelize = require("sequelize");

const db = require("../../database");


const User = db.define("user", {
    email: Sequelize.STRING(254),
    password: Sequelize.CHAR(60),
});

module.exports = User;

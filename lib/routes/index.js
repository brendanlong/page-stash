"use strict";
const router = require("koa-router")();


router.use("/users", require("./users"));

module.exports = router.routes();

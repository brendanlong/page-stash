"use strict";
const router = require("koa-router")();

const User = require("../models/user");


router.get("/:id", function *(next) {
    const user = yield User.get(this.params.id);
    if (user === null) {
        this.status = 404;
    } else {
        this.body = user;
    }
    yield next;
});

module.exports = router.routes();

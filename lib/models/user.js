"use strict";
const DbUser = require("./database/user");

const User = {
    get: (id) => {
        return DbUser.findById(id).then((user) => {
            return user ? user.get() : null;
        });
    },
};

module.exports = User;

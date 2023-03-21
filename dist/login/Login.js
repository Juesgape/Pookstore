"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const User_1 = require("../user/User");
class Login {
    constructor(name, email, password, type) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.type = type;
    }
    createUser() {
        const user = new User_1.User(this.email, this.name);
    }
}
exports.Login = Login;

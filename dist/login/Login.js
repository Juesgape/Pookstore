import { User } from "../User/User.js";
class Login {
    name;
    email;
    password;
    type;
    constructor(name, email, password, type) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.type = type;
    }
    createUser() {
        const user = new User(this.email, this.name, this.type);
        return user;
    }
}
//This was just to test that it worked
/* const login = new Login('Juan', 'Juan@pppp', '12344', 'cliente')

login.createUser() */
export { Login };

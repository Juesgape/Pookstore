import { User } from "../User/User.js";
class Login {
    constructor(name, email, password, type) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.type = type;
    }
    createUser() {
        const user = new User(this.email, this.name, this.type);
    }
}
//This was just to test that it worked
/* const login = new Login('Juan', 'Juan@pppp', '12344', 'cliente')

login.createUser() */
export { Login };

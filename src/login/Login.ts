import { User } from "../User/User.js";

class Login {
  constructor(
    private name: string,
    private email: string,
    private password: string,
    private type: string
    ) {

  }
  public createUser() {
    const user = new User(this.email, this.name, this.type)
    return user
  }
}

//This was just to test that it worked
/* const login = new Login('Juan', 'Juan@pppp', '12344', 'cliente')

login.createUser() */

export {
  Login
}

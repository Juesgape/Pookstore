import { User } from "../User/User";

class Login {
  constructor(
    private name: string,
    private email: string,
    private password: string,
    private type: string
    ) {

  }
  public createUser() {
    const user = new User(this.email, this.name)
  }
}

export {
  Login
}

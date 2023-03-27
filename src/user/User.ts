class User {
  constructor(
    private email: string,
    private userName: string,
    private type: string,
    ) {

  }
  getUserInfo() {
    console.log(`Email: ${this.email}, Username: ${this.userName}, Type: ${this.type}`)
  }
}

export {
  User
}

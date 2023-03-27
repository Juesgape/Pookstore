class User {
  constructor(
    public email: string,
    public userName: string,
    public type: string,
    ) {

  }
  getUserInfo() {
    console.log(`Email: ${this.email}, Username: ${this.userName}, Type: ${this.type}`)
  }
}

export {
  User
}

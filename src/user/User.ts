class User {
  constructor(
    public email: string,
    public userName: string,
    public type: string,
    ) {

  }
  getUserInfo():void {
    console.log(`Email: ${this.email}, Username: ${this.userName}, Type: ${this.type}`)
  }
}

export {
  User
}

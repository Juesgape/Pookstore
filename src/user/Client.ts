import {User} from "./User.js"

class Client extends User{
  private likes: string[] = []

  constructor(email: string,username: string, type: string){
      super(email, username, type)
  }
  getUserLikes() {
    console.log(`Likes: ${this.likes}`)
  }
}

export {
  Client
}

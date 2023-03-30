import {User} from "./User.js"

class Client extends User{
  private _likes: string[] = []

  constructor(email: string, userName: string, type: string){
      super(email, userName, type)
  }
  public get getName() {
    return this.userName
  }
  public get getUserLikes() {
    return this._likes
  }
  public set setLikes(value: string[]) {
    this._likes = value
  }
}

export {
  Client
}

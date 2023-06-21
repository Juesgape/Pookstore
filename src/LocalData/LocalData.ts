import {User} from '../User/User.js'

class LocalData {
  constructor() {

  }
  public getUser() {
    let info: string | null = localStorage.getItem('user')
    let infoObj: User

    if(info !== null) {
      infoObj = JSON.parse(info)
    } else {
      infoObj = new User('blah@gmail.com', 'RandomUser', 'client')
    }

    return infoObj

  }
}

export {
  LocalData
}

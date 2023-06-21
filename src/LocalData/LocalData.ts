import {User} from '../User/User'

class LocalData {
  constructor() {

  }
  public getUser() {
    let info: string | null = localStorage.getItem('user')
    let infoObj: User

    if(info !== null) {
      infoObj = JSON.parse(info)
    } else {
      window.location.href = '.././interface/login.html'
      throw new Error('El usuario no está registrado')
    }

    return infoObj

  }
}

export {
  LocalData
}

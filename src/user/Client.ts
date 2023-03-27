import {User} from "./User"

class Client extends User{
    constructor(email: string,username: string, type: string){
        super(email, username, type)
    }

}

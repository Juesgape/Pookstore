import {User} from "./User"

class Worker extends User{
    constructor(email: string,username: string, type: string){
        super(email, username, type)
    }

}

import { User } from "./User.js";
class Client extends User {
    _likes = [];
    constructor(email, userName, type) {
        super(email, userName, type);
    }
    get getName() {
        return this.userName;
    }
    get getUserLikes() {
        return this._likes;
    }
    set setLikes(value) {
        this._likes = value;
    }
}
export { Client };

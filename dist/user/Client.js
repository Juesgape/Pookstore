import { User } from "./User.js";
class Client extends User {
    constructor(email, username, type) {
        super(email, username, type);
        this.likes = [];
    }
    getUserLikes() {
        console.log(`Likes: ${this.likes}`);
    }
}
export { Client };

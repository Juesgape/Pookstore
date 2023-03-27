import { User } from "./User";
class Client extends User {
    constructor(email, username, type) {
        super(email, username, type);
        this.likes = [];
    }
    getUserLikes() {
        console.log(`Likes: ${this.likes}`);
    }
}

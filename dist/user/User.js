export class User {
    constructor(email, userName, type) {
        this.email = email;
        this.userName = userName;
        this.type = type;
        this.likes = [];
    }
    getUserInfo() {
        console.log(`Email: ${this.email}, Username: ${this.userName}, Type: ${this.type}, Likes: ${this.likes}`);
    }
}

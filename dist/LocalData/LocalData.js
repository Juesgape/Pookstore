import { User } from '../User/User.js';
class LocalData {
    constructor() {
    }
    getUser() {
        let info = localStorage.getItem('user');
        let infoObj;
        if (info !== null) {
            infoObj = JSON.parse(info);
        }
        else {
            infoObj = new User('blah@gmail.com', 'RandomUser', 'client');
        }
        return infoObj;
    }
}
export { LocalData };

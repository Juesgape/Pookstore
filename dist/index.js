import { Login } from './Login/Login.js';
const loginButton = document.querySelector('#submit');
loginButton === null || loginButton === void 0 ? void 0 : loginButton.addEventListener('click', makeLogin);
function makeLogin() {
    const userName = document.getElementById('username').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const userType = document.querySelector('input[name="user-type"]:checked').value;
    const login = new Login(userName, email, password, userType);
    console.log(login);
}

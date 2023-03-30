import { Login } from './Login/Login.js';
const loginButton = document.querySelector('#submit');
loginButton?.addEventListener('click', makeLogin);
function makeLogin() {
    const userName = document.getElementById('username').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const userType = document.querySelector('input[name="user-type"]:checked').value;
    //Creating user
    const login = new Login(userName, email, password, userType);
    const newUser = login.createUser();
    localStorage.setItem('user', JSON.stringify(newUser));
    setTimeout(() => {
        try {
            window.location.href = '../index.html';
        }
        catch (error) {
            console.error('Navigation failed:', error);
        }
        console.log(login);
    }, 2000);
}

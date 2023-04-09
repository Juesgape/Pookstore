import { Login } from './Login/Login.js';
const loginButton = document.querySelector('#submit');
loginButton?.addEventListener('click', makeLogin);
function makeLogin() {
    const userName = document.getElementById('username').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const userType = document.querySelector('input[name="user-type"]:checked').value;
    //Creating user
    if (validate_data(userName, email, password)) {
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
}
function validate_data(name, email, pass) {
    let warning = document.getElementById('warning');
    if (name.length === 0 || pass.length === 0 || email.length === 0) {
        warning.textContent = "Please fill in all fields";
        return false;
    }
    else if (name.length != 0 && pass.length != 0 && email.length != 0) {
        let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        // Using test we can check if the text match the pattern
        if (validEmail.test(email)) {
            warning.style.color = "green";
            warning.textContent = "Logging in";
            return true;
        }
        else {
            warning.textContent = "Please enter a valid email address";
            return false;
        }
    }
    else {
        return false;
    }
}

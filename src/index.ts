import {Login} from './Login/Login.js'

const loginButton = document.querySelector('#submit')
loginButton?.addEventListener('click', makeLogin)

function makeLogin() {
  const userName: string = (document.getElementById('username') as HTMLInputElement).value;
  const email: string = (document.querySelector('#email') as HTMLInputElement).value;
  const password: string = (document.querySelector('#password') as HTMLInputElement).value;
  const userType: string = (document.querySelector('input[name="user-type"]:checked') as HTMLInputElement).value;

  //Creating user
  const login: Login = new Login(userName, email, password, userType)
  const newUser = login.createUser()
  localStorage.setItem('user', JSON.stringify(newUser))

  setTimeout(() => {
    try {
      window.location.href = '../index.html';
    } catch (error) {
      console.error('Navigation failed:', error);
    }
    console.log(login);
  }, 2000)

}

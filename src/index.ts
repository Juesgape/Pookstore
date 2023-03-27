import {Login} from './Login/Login.js'

const loginButton = document.querySelector('#submit')
loginButton?.addEventListener('click', makeLogin)

function makeLogin() {
  const userName = (document.getElementById('username') as HTMLInputElement).value;
  const email = (document.querySelector('#email') as HTMLInputElement).value;
  const password = (document.querySelector('#password') as HTMLInputElement).value;
  const userType = (document.querySelector('input[name="user-type"]:checked') as HTMLInputElement).value;

  const login = new Login(userName, email, password, userType)

  console.log(login);


}

import {Login} from './login/Login.js'

const loginButton = document.querySelector('#submit')
loginButton?.addEventListener('click', makeLogin)

function makeLogin() {
  const userName: string = (document.getElementById('username') as HTMLInputElement).value;
  const email: string = (document.querySelector('#email') as HTMLInputElement).value;
  const password: string = (document.querySelector('#password') as HTMLInputElement).value;
  const userType: string = (document.querySelector('input[name="user-type"]:checked') as HTMLInputElement).value;

  //Creating user

  if(validate_data(userName,email,password)){
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
}

function validate_data(name:string,email:string,pass:string,):boolean{
  let warning: HTMLSpanElement = (document.getElementById('warning') as HTMLSpanElement)
  if(name.length ===0 || pass.length===0 || email.length===0){
   
    warning.textContent= "Please fill in all fields"
    
    return false

  }
  else if(name.length != 0 && pass.length !=0 && email.length !=0){
    
      let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

      // Using test we can check if the text match the pattern
      if( validEmail.test(email) ){
        warning.style.color = "green";
        warning.textContent="Logging in";
        

        return true;
  
      }
      else{
        warning.textContent= "Please enter a valid email address"
        
      
      return false}
    }
  else{return false}
}



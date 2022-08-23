import { useState } from "react";

import { logInEmail, signInGoogle, 
 } from "../../firebase/firebase.js";

export const HomePrueba = () => {
    // const [data , setData] = useState({email:'', password:''})
    // console.log('style:red', data)

//   const ChangeImput = () => {
// }
    const [user, setUser] = useState ({
        email: '',
        password: '',
    }); 

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value});
        // console.log('user', user)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        logInEmail(user.email, user.password);
        console.log('user', user)
    }

  return (
    <form onSubmit={handleSubmit}>
      Hola Mundo
      
      <input type="text" placeholder="correo@email.com" name='email' onChange={handleChange} />
      <input type="password" placeholder="contraseña"  name='password' onChange={handleChange}/>
      <button onChange={handleChange}>Ingresar</button>
      <button onClick={signInGoogle}>Login Gmail</button>
    </form>
  );
};


// import React, {useState} from 'react'; 
// import { users } from 'UsersData'; 
// function Login() { const [data, setData] = useState({ username: '', password: '' }); const {uname, pass} = data; const checkUser = () => { const usercheck = users.find(user => (user.username === uname && user.password === pass)); if(usercheck) { console.log("Login successful"); }else { console.log("Wrong password or username"); } 
// console.log(uname); console.log(usercheck); } const changeHandler = (e) => { setData({...data, [e.target.name]:[e.target.value]}) } const handleSubmit = (e) => { e.preventDefault(); checkUser(); console.log(checkUser()); } return ( <div className="login-bg"> <div className="card"> <form className='loginForm' onSubmit={handleSubmit} > <div className="input-text"> <input type="text" name="username" value={uname} placeholder="Username" aria-describedby="inputGroupPrepend2" required onChange={changeHandler} /> </div> <div className="input-text"> <input type="password" name="password" value={pass} placeholder="Password" aria-describedby="inputGroupPrepend2" required onChange={changeHandler} /> </div> <div className="buttons"> <button type="submit" className="btn btn-warning btn-block"> Login </button> </div> </form> </div> </div> ) } export default Login;
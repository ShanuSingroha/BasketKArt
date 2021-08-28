import React,{useState} from "react"
import logo from "./logo.png"
import {Link, useHistory} from "react-router-dom"
import "./login.css"
import {auth} from "./firebase"
import { getAuth, createUserWithEmailAndPassword ,
signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = e => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password).then((auth) => {
      console.log(auth);
      if(auth) history.push('/');
    })
    .catch(error => alert(error.message));
  }
  const register = e => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password).then((auth) => {
      console.log(auth);
      if(auth) history.push('/');
    })
    .catch(error => alert(error.message));
  }




  return (
    <div className="login">
    <Link to="/">
      <img className="login_logo" src={logo} alt=""/>
    </Link>
    <div className="login_container">
     <h1>SIGN-IN</h1>
     <form>
     <h4>E-Mail</h4>
    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
    <h4>Password</h4>
   <input type="password" value={password} onChange={e => setPassword(e.target.value)}  />
   <button type="submit" onClick={signIn}>Sign-In</button>
    </form>
      <div className="spanhue">  New To BasketKart?</div>
       <button onClick={register}>Create Your BasketKart Account</button>
    </div>
    </div>

  );
}
export default Login;

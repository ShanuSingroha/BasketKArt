import React, { useEffect} from 'react';
import './index.css';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Footer from './Footer';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {auth} from "./firebase"
import { useStateValue }  from "./StateProvider"

function App(){
  const [ {basket}, dispatch] = useStateValue();
  useEffect( () => {
  onAuthStateChanged(auth, (userauth) => {
  if (userauth) {
    console.log(userauth);
    dispatch({
      type : "SET_USER",
      user : userauth
    })
  } else {
    dispatch({
      type : "SET_USER",
      user : null
    })

  }
});
}, [] );
  return(
<Router>
  <div>
  <Switch>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/checkout">
      <Header />
      <Checkout />
    </Route>
    <Route path="/">
      <Header />
      <Home />
    </Route>
  </Switch>
  </div>
</Router>
);
}

export default App;

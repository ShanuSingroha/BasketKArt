import React from "react"
import logo from "./logo.png"
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from "react-router-dom"
import {useStateValue} from "./StateProvider";
import { signOut} from "firebase/auth"
import {auth} from "./firebase"

function Header() {
  const [{basket,user},dispatch] = useStateValue();

  const handleAuthentication = () => {
        if(user){
          signOut(auth);
        }
  }
  return (
    <div className="header">
      <Link to="/">
      <img alt="logo" src={logo} className="header-logo" />
      </Link>
      <div className="search-bar" >
       <input type="text" className="header-search" />
       <SearchIcon className="search-icon"/>
      </div>
      <div className="nav-items">
       <Link to={ !user && "/login"} style={{ textDecoration: 'none' }}>
       <div onClick={handleAuthentication} className="header-option">
        <span className="first-line">Hello {user ? user.email.split("@")[0] : "Guest"}</span><span className="second-line">
        {  user ? "Sign Out" : "Sign In"}
         </span>
         </div>
         </Link>
       <div className="header-option"> <span className="first-line">Returns</span><span className="second-line"> & orders </span></div>
      <Link to="/Checkout" style={{ textDecoration: 'none' }}>
      <div className="cart" >
      <ShoppingCartIcon /><span className="second-line cart-count">
      {basket.length}
      </span>
      </div>
      </Link>
    </div>
      </div>
  );
}

export default Header;

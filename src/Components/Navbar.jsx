import React from 'react';
import logo from "../images/logo.png";
import notify from "../images/notify.svg";
import checkout from "../images/checkout.svg";
import user from "../images/user.png";

const Navbar = () => {
  return (
    <div >
    <nav className="navbar navbar-expand-lg navbar-light fixed-top ">
<div className="container-fluid">
     <img  src={logo} alt ="logo"/>
{/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button> */}
<div className="collapse navbar-collapse" id="navbarSupportedContent"> 
  <form className="d-flex ml-5 searchform ">
    <input className="form-control search me-2 " type="search" placeholder="Search" aria-label="Search" />  
  </form>
  <ul className="navbar-nav mb-2 smaltab mb-lg-0">
    <li className="nav-item">
          <img  src ={notify} alt=""/>
    </li>     
    <li className="nav-item">
    <img  src ={checkout} alt=""/>
    </li>
    <li className="nav-item dflex">
    <img  src ={user} style={{width:"30px"}}alt=""/><span>R.Spencer</span><span className='downarrows'>&nbsp;&nbsp;&gt;</span>
    </li>
  </ul>
</div>
</div>
</nav>
  
</div>
  );
}

export default Navbar;

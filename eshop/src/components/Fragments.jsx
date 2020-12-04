/* eslint-disable jsx-a11y/anchor-is-valid */
import React ,{useState} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fragementStyles.css';

export  function Nav() {
   return (
      <div className= "custom-nav">
<nav className="navbar navbar-expand-lg navbar-dark">
<Link to="/" className="navbar-brand" >LOGO</Link>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#
navbarSupportedContent">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav mr-auto">

<li className="nav-item active">
<Link to="/" className="nav-link" href="#">Home </Link>
</li>
<li className="nav-item">
<Link to="/contact" className="nav-link" href="#">Contact</Link>
</li>
<li className="nav-item">
<Link to="/about" className="nav-link" href="#">About</Link>
</li>


</ul>
<form className="form-inline my-2 my-lg-0">
<input className="form-control mr-sm-2" type="text" placeholder="Search"/>
<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Find
Stuff</button>
</form>
</div>
</nav>
</div>
   );
}



  export function Footer() {
    return (
        <div className = "footer">
        <h2>Chron</h2> <a className ="top" href ="#">Return to Top</a>  
        <hr className = "footer-hr" />
        
        <div className ="footer-row">
        <h5>About |</h5>
          <a href ="#"><span className= "footer-listelem">Privacy Notice</span> </a>  
            <a href ="#"><span className= "footer-listelem">Interest based Ads</span> </a>
            <a href ="#"><span className= "footer-listelem">Terms of Use</span></a>
            <a href ="#"><span className= "footer-listelem">Our Company</span></a>
            <a href ="#"><span className= "footer-listelem"> careers</span></a>
            <a href ="#"><span className= "footer-listelem"> Advertise With Us</span></a>
            
        </div>
        <div className ="footer-row">
        <h5>Contact |</h5>
            <a href ="#"><span className= "footer-listelem">customer Service</span></a>
            <a href ="#"><span className= "footer-listelem">Newsroom Contacts</span></a>
        </div>
        
        <div className ="footer-row">
        <h5>Connect |</h5>
            <a href ="#"><span className= "footer-listelem">Email Newsletter</span></a>
            <a href ="#"><span className= "footer-listelem">Facebook</span></a>
            <a href ="#"><span className= "footer-listelem">Twitter</span></a>
            <a href ="#"><span className= "footer-listelem">Pinterest</span></a>
            <a href ="#"><span className= "footer-listelem">Google</span></a>
            <a href ="#"><span className= "footer-listelem">Instagram</span></a>
            
        </div>
        <div className ="footer-row">
        <h5>Subscribe |</h5>
            <a href ="#"><span className= "footer-listelem"> iPad app</span></a>
            <a href ="#"><span className= "footer-listelem">eEdition Demo</span></a>
            <a href ="#"><span className= "footer-listelem">Today's eNewspaper</span></a>
        </div>
        
        <hr className = "footer-hr" />
    
    
        <h2>HEREST</h2>
        &copy;Copyright 2020
        </div>
    )
}


export function Card(props) {
     return (
<div className = "card">
   <a href=  {`/product/${props.id}`} > <img className="IMG" src = {props.src} alt = {props.alt} /></a> 
   <div className ="card-body">

      <div className = "title-text">{props.title}</div>
    <p className = "description">{props.description}</p>
    </div>
    
</div>
    );
}


export function Cart(props) {
    let [state, setstate] = useState(0);

    function plus() {
        setstate(state+1);
    }
    function minus() {
        setstate(state-1);
    }
    return (
        
        <div className = "payy">
            <h2>This is cart.</h2>
<div class="flexMaintain">
            <select  className="aa size" size="1">
<option hidden>Size</option>
<option>XXS</option>
<option >XS </option>
<option >S</option>
<option >S Tall</option>
<option>M</option>
<option>M Tall</option>
<option>L</option>
<option>L Tall</option>
<option>XL</option>
<option>XL Tall</option>
<option>XXL</option>
<option>XXL Tall</option>
<option>XXXL</option>



</select>
        <div className = "aa changeNo"> <button className = "cart-buttons" onClick = {plus} >+</button>   <span>{state}</span>
          <button className = "cart-buttons" onClick = {minus}>-</button>
        </div> 
        </div>
        <button class="btn btn-primary">ADD TO BAG</button>
        <div className = "total-price">{props.rate * state}</div>

        </div>
    )
};


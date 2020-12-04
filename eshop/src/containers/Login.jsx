import React,{useState} from 'react'
import './containerStyles.css';
import google  from './assets/google.png';
import twitter from './assets/twitter.png';
import fb  from './assets/fb.png';


export default function Login() {
 

function handleClick(event) {
    event.preventDefault(); 

}
     const [isOld , setNew] = useState(true);

    return (
        <div className = "login">
            <div className = "real-form">
           <h2>{isOld? "SignIn" : "SignUp"} to <span>Shopify</span></h2> 
<form>
      {!isOld? <input className = "input" type="text" placeholder  = "FullName" name = "fullName" /> :null }  
    
    <input className = "input" type="email" placeholder  = "Email" name = "email" />
     <input className = "input  " type="password" placeholder  = "Password" name = "password"/>
     {isOld? <button className = "btn btn-primary" type = "submit" onClick = {handleClick}>SignIn</button>
      :<button className = "btn btn-primary" type = "submit" onClick = {handleClick}>SignUp</button>}
</form>
</div>
      <div>
        {isOld? <p> new to Shopify signUp here <button className = "btn btn-success" 
        onClick = {function (){setNew(false);}} >SignUp</button></p> :null} 
      </div>
      <hr/>
      <p>or,</p>
      <p>{isOld? "SignIn" : "SignUp"} with</p>
      <div>
          <a href = "www.google.com"><img src = {google} alt= "googleIcon" /></a>   
          <a href = "www.facebook.com"><img src = {fb}  alt ="fbicon"/> </a>  
          <a href = "www.twitter.com"><img src = {twitter} alt = "twittericon" /></a>  
             </div>


   </div>




   
    )
}


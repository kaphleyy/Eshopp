/* eslint-disable no-unused-vars */
import React from 'react';
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';
import img4 from './assets/4.jpg';import img10 from './assets/10.jpg';
import img5 from './assets/5.jpg';import img11 from './assets/11.jpg';
import img6 from './assets/6.jpg';import img12 from './assets/12.jpg';
import img7 from './assets/7.jpg';import img13 from './assets/13.jpg';
import img8 from './assets/8.jpg';import img14 from './assets/14.jpg';
import img9 from './assets/9.jpg';

import { Footer, Nav , Cart} from '../components/Fragments';
import {cartArr} from './data';
import './containerStyles.css';

export default function CartPage(props) {
    const images = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img11,img12,img13,img14];

     let id = props.match.params.id;

     var info = null ;

    cartArr.forEach(obj => {
     if (obj.id===id) {
         info = obj;
     }
 });
     return (
        <div>
         <Nav/>
<div >
   <img className ="cartImage" src = {images[id-1]} alt ="{image}"/>
    <Cart rate = "5" />
 </div> 

<div>
    <h3>{info.title} and this is product {id}</h3>
    <p>{info.paragraph}</p>
    <h5>${info.price}</h5>
    <p> we are writing here something and lets see if </p> <cart /> 
</div>
 
<Footer />
     </div>
    )
    }


    
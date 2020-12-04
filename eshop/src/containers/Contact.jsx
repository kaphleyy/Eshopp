/* eslint-disable jsx-a11y/aria-role */
import React from 'react';
import {Nav , Footer} from '../components/Fragments';
import './containerStyles.css';

export default function Contact() {
    return (
        <div>
            <Nav />

<div className = "container submit-card">
    <div className="row">
    <h2 className = "touch">Get In Touch</h2>
    </div>
    <div className= "row">
        <div className = "col-xs-12 col-md-6 col-lg-3">
            <input className = "custom-input" type="text" placeholder ="Full Name"/>
        </div>
        <div className = "col-xs-12 col-md-6 col-lg-3">
            <input className = "custom-input" type="email" placeholder ="Email"/>
        </div>
        <div className = "col-xs-12 col-md-12 col-lg-4">
            <textarea className ="custom-textarea" rows="15" cols="36" placeholder = "Message"></textarea>
        </div>
        <div className = "col-xs-12 col-md-6 col-lg-2">
            <button className="btn btn-outline-success btn-custom" role="submit">Post</button>
        </div>
    </div>
</div>





            <Footer />
        </div>
    );
}



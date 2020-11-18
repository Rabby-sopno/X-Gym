import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Head.css'

const Head = () => {
    return (
        <div className="head">
            <div className="container header-content">
            <Navbar></Navbar>
            <h1>CLASSES</h1>
            </div>
        </div>
    );
};

export default Head;
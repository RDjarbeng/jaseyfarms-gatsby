import React from 'react'
import Header from './Header/header';
import Footer from './Footer/Footer';
//CSS styles

import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
// import AOS from "aos";//trying to implement aos


const Layout = (props) => {
    return (
        <div className="container-fluid p-0">
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout
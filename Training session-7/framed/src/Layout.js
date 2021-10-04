import React from 'react'
import Header from './Header.js';
import Footer from './Footer.js';

import Main from './Main.js'
import style from './style.css'


function Layout(){

    return (

        <div className ="main-container">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default Layout;
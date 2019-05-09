import React, { Component } from 'react'
import Header from './Header'
import Main from './MainContent'
import Footer from './Footer'

import "./src/scss/style.scss";

export default class Homepage extends Component {

    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}

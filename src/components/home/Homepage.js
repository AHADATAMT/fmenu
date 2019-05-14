import React, { Component } from 'react'
import Header from '../layout/Header'
import Main from './MainContent'
import Footer from '../layout/Footer'

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

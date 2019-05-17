import React, { Component } from 'react'
import Header from '../layout/Header'
import Main from './MainContent'
import Footer from '../layout/Footer'

import "./src/scss/style.scss";

export default class Homepage extends Component {

    constructor(props) {
        super(props);
        const existingToken = sessionStorage.getItem('token');
        const accessToken = new URLSearchParams(this.props.location.search).get('api_key');

        if (accessToken) {
            console.log(`New accessToken: ${accessToken}`);
            sessionStorage.setItem("token", accessToken);
            this.state = {
                token: accessToken
            }
        }

        if (existingToken) {
            this.state = {
                token: existingToken
            };
        }
    }
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

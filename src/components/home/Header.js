import React, { Component } from 'react'
import logo from './src/images/logo.svg'

export default class Header extends Component {
    render() {
        return (
            <header className="site-header">
                <div className="container">
                    <div className="site-header-inner">
                        <div className="brand header-brand">
                            <h1 className="m-0">
                                <a href="#">
                                    <img className="header-logo-image" src={logo} alt="Logo" />
                                </a>
                            </h1>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

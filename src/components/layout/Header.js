import React, { Component } from 'react'
import logo from '../home/src/images/logo.svg'
import Navbar from './Navbar'
export default class Header extends Component {
  render() {
    return (
      <header className="site-header">
        <Navbar />
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

import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./src/scss/style.scss";

export default class RegisterPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showPassword: false,
            passwordField: 'password',
            form: {
                firstname: '',
                lastname: '',
                password: '',
                email: '',
            }
        }
    }

    maskPassword = () => {
        this.setState({
            showPassword: !this.state.showPassword
        }, () => {
            if (this.state.showPassword)
                this.setState({
                    passwordField: 'text'
                })
            else
                this.setState({
                    passwordField: 'password'
                })
        })

    }
    submitRegister = () => {
        console.log(JSON.stringify(this.state.form))
        return fetch('http://127.0.0.1:5000/profile/signup', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(this.state.form)
        }).then(function (response) { return response.json() })
        .then(function (json) {
          console.log(json)
        })
    }
    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            form: {
                ...this.state.form,
                [name]: value
            }
        }, () => console.log(this.state.form));
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card card-signin my-5">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Register</h5>
                                    <Form className="form-register">
                                        <div className="form-row form-label-group">
                                            <div className="col-12 col-sm-6">
                                                <input type="text" name="firstname" id="inputFirstName" className="form-control" placeholder="First name" onChange={this.handleChange} />
                                                <label for="inputFirstName">First name</label>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <input type="text" name="lastname" id="inputLastName" className="form-control" placeholder="Last name" onChange={this.handleChange} />
                                                <label for="inputLastName">Last name</label>
                                            </div>
                                        </div>
                                        <div className="form-label-group">
                                            <input type="email" name="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus onChange={this.handleChange} />
                                            <label for="inputEmail">Email address</label>
                                        </div>
                                        <div className="form-label-group">
                                            <input type={this.state.passwordField} name="password" id="inputPassword" className="form-control" placeholder="Password" required onChange={this.handleChange} />
                                            <label for="inputPassword">Password</label>
                                            <a href="#" onClick={this.maskPassword}><small>show password</small></a>
                                        </div>
                                        <a className="btn btn-lg btn-primary btn-block text-uppercase" onClick={this.submitRegister}>Register</a>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

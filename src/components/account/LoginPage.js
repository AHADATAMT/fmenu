import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./src/scss/style.scss";

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: false,
            passwordField: 'password',
            form: {
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
    submitSignIn = () => {
        console.log(JSON.stringify(this.state.form))
        return fetch('http://127.0.0.1:5000/profile/login', {
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
                                    <h5 className="card-title text-center">Sign In</h5>
                                    <Form className="form-signin">
                                        <div className="form-label-group">
                                            <input type="email" name="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus onChange={this.handleChange}/>
                                            <label for="inputEmail">Email address</label>
                                        </div>

                                        <div className="form-label-group">
                                            <input type="password" name="password" id="inputPassword" className="form-control" placeholder="Password" required onChange={this.handleChange}/>
                                            <label for="inputPassword">Password</label>
                                        </div>

                                        <div className="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" for="customCheck1">Remember password</label>
                                        </div>
                                        <a className="btn btn-lg btn-primary btn-block text-uppercase" onClick={this.submitSignIn}>Sign in</a>
                                        <hr className="my-4" />
                                        <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Sign in with Google</button>
                                        <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
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

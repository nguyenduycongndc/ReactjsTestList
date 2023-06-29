import React, { Component } from 'react';
import axios from 'axios';
import Menu from '../Menu/Menu';
import Home from '../Home/Home';
import './RegisterForm.css';

class RegisterForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            message: '',
            errorMessage: ''
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8000/api/user/register', {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation
        })
            .then(response => {
                this.setState({
                    message: 'Account registered. Please check your email for verification instructions.'
                });
            })
            .catch(error => {
                console.error(error);
                this.setState({
                    errorMessage: 'Something went wrong'
                });
            });
    }

    render() {
        return (
            <div>
                <Home />
                <div class="container">
                    <form onSubmit={this.handleSubmit}>
                        {this.state.message && <p className="text-success">{this.state.message}</p>}
                        {this.state.errorMessage && <p className="text-error">{this.state.errorMessage}</p>}
                        <div className="row form-group">
                            <label className="col-md-2 col-lg-2" htmlFor="name">Name</label>
                            <input type="text" className="col-md-4 col-lg-4 input-text" id="name" value={this.state.name} onChange={event => this.setState({ name: event.target.value })} />
                        </div>
                        <div className="row form-group">
                            <label className="col-md-2 col-lg-2" htmlFor="email">Email</label>
                            <input type="email" className="col-md-4 col-lg-4 input-text" id="email" value={this.state.email} onChange={event => this.setState({ email: event.target.value })} />
                        </div>
                        <div className="row form-group">
                            <label className="col-md-2 col-lg-2" htmlFor="password">Password</label>
                            <input type="password" className="col-md-4 col-lg-4 input-text" id="password" value={this.state.password} onChange={event => this.setState({ password: event.target.value })} />
                        </div>
                        <div className="row form-group">
                            <label className="col-md-2 col-lg-2" htmlFor="password_confirmation">Confirm Password</label>
                            <input type="password" className="col-md-4 col-lg-4 input-text" id="password_confirmation" value={this.state.password_confirmation} onChange={event => this.setState({ password_confirmation: event.target.value })} />
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default RegisterForm;
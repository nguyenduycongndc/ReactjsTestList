import React, { Component } from 'react';
import axios from 'axios';
import './RegisterForm.css';
import BaseSingle from '../BaseSingle/BaseSingle';

class RegisterForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            message: '',
            errorMessage: ''
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8000/api/user/register', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            userName: this.state.userName,
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
                <BaseSingle />
                <div className='main'>
                    <div class="container">
                        <form onSubmit={this.handleSubmit}>
                            {this.state.message && <p className="text-success">{this.state.message}</p>}
                            {this.state.errorMessage && <p className="text-error">{this.state.errorMessage}</p>}
                            <div className="row form-group">
                                <label className="col-md-2 col-lg-2" htmlFor="firstName">First Name</label>
                                <input type="text" className="col-md-4 col-lg-4 input-text" id="firstName" value={this.state.firstName} onChange={event => this.setState({ name: event.target.value })} />
                            </div>
                            <div className="row form-group">
                                <label className="col-md-2 col-lg-2" htmlFor="lastName">Last Name</label>
                                <input type="text" className="col-md-4 col-lg-4 input-text" id="lastName" value={this.state.lastName} onChange={event => this.setState({ email: event.target.value })} />
                            </div>
                            <div className="row form-group">
                                <label className="col-md-2 col-lg-2" htmlFor="userName">User Name</label>
                                <input type="text" className="col-md-4 col-lg-4 input-text" id="userName" value={this.state.userName} onChange={event => this.setState({ password: event.target.value })} />
                            </div>
                            <button type="submit" className="btn btn-primary">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterForm;
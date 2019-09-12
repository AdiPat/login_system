/**
 *
 * LoginComponent: Handles Login functionality
 *
 */

import React from 'react';
import '../css/Login.css';
import { apiLogin, apiHello } from '../api';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        // TODO: validate input
        // flag = isInputValid();
        // TODO: Replace with token obtained from API
        let token = apiLogin(this.state.username, this.state.password);
        let flag = apiHello(this.state.username, token);

        // TODO: redirect to dash properly
        if (token && flag) {
            this.props.setToken(this.state.username, token);
            window.location.href = '/dash';
        }
    }

    render() {
        return (
            <div className="login">
                <form onSubmit={this.handleSubmit} className="login-form">
                    <div className="login-form_element">
                        <div className="login-form_label">
                            <label>Username</label>
                            <span className="login-form_icon">Icon</span>
                        </div>
                        <input
                            value={this.state.username}
                            onChange={e =>
                                this.setState({ username: e.target.value })
                            }
                            type="text"
                            placeholder="johndoe"
                        ></input>
                        <div className="login-form_message">Input is valid</div>
                    </div>
                    <div className="login-form_element">
                        <div className="login-form_label">
                            <label>Password</label>
                            <span className="login-form_icon">Icon</span>
                        </div>
                        <input
                            value={this.state.password}
                            onChange={e => {
                                this.setState({ password: e.target.value });
                            }}
                            type="password"
                        ></input>
                        <div className="login-form_message">
                            Password is valid
                        </div>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default LoginComponent;

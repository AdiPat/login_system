/**
 *
 * LoginComponent: Handles Login functionality
 *
 */

import React from 'react';
import '../css/Login.css';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        // TODO: validate input
        // flag = isInputValid();
        let flag = true;
        // TODO: Replace with token obtained from API
        let dummyToken = 'dummy';
        // TODO: redirect to dash properly
        if (flag) {
            this.props.setToken(dummyToken);
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
                        <input type="text" placeholder="johndoe"></input>
                        <div className="login-form_message">Input is valid</div>
                    </div>
                    <div className="login-form_element">
                        <div className="login-form_label">
                            <label>Password</label>
                            <span className="login-form_icon">Icon</span>
                        </div>
                        <input type="password"></input>
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

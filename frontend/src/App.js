/**
 *
 * DashComponent: Handles Login functionality
 *
 */

import React from 'react';
import './App.css';
import './css/Button.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import DashComponent from './components/DashComponent';
import { apiData } from './api';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            token: null,
        };

        this.setToken = this.setToken.bind(this);
    }

    componentDidMount() {
        // check if sessionStorage already has login data
        let username = sessionStorage.getItem('username');
        let token = sessionStorage.getItem('token');
        if (username && token) {
            this.setState({
                username: username,
                token: token,
            });
        }
        console.log('sessionStorage: (username,token)', username, token);
    }

    onLogout() {
        // clear session storage
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('token');
        // redirect to home
        window.location.href = '/';
    }

    /**
     *
     * @param {string} token Token string received from server
     * @returns {boolean}
     *
     */
    setToken(username, token) {
        this.setState({
            username: username,
            token: token,
        });

        // store data in sessionStorage
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('token', token);
        // Sanity check to check if token is set
        if (this.state.token === token) return true;
        return false;
    }

    render() {
        console.log('Re-rendering App!', this.state);
        let data = null;
        if (this.state.token) {
            data = apiData(this.state.username, this.state.token);
            console.log(data);
        }
        return (
            <Router>
                <div className="app-header">
                    <h1>Welcome to SimplyLogin</h1>
                    <button className="btn-basic">
                        <Link to="/login">Login</Link>
                    </button>
                    <button
                        className="btn-basic"
                        onClick={this.onLogout}
                        disabled={this.state.token == null}
                    >
                        Logout
                    </button>
                </div>
                <Route
                    path="/login"
                    component={() => (
                        <LoginComponent setToken={this.setToken} />
                    )}
                ></Route>
                <Route
                    path="/dash"
                    component={() => (
                        <DashComponent
                            token={this.state.token}
                            username={this.state.username}
                            data={data}
                        />
                    )}
                ></Route>
            </Router>
        );
    }
}

export default App;

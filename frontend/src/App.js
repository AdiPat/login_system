/**
 *
 * DashComponent: Handles Login functionality
 *
 */

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import DashComponent from './components/DashComponent';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            token: null,
        };

        this.setToken = this.setToken.bind(this);
    }

    /**
     *
     * @param {string} token Token string received from server
     * @returns {boolean}
     *
     */
    setToken(token) {
        this.setState({
            token: token,
        });
        // Sanity check to check if token is set
        if (this.state.token === token) return true;
        return false;
    }

    render() {
        return (
            <Router>
                <div className="app-header">
                    <h1>Welcome to Serendeepia!</h1>
                    <button>
                        <Link to="/login">Login</Link>
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
                        />
                    )}
                ></Route>
            </Router>
        );
    }
}

export default App;

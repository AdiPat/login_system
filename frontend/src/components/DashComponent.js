/**
 *
 * DashComponent: Handles Login functionality
 *
 */

import React from 'react';
import '../css/Dash.css';

class DashComponent extends React.Component {
    componentWillMount() {
        // if either one is missing, redirect
        if (!this.props.username || !this.props.token) {
            window.location.href = '/login';
        }
    }

    render() {
        let dummyImage = this.props.data;
        // TODO: Get image from API

        return (
            <div className="dash">
                <div className="dash-header">
                    <h1>Welcome {this.props.username}</h1>
                    <h3>Here is your pet picture of the day!</h3>
                </div>
                <div className="dash-data">
                    <img
                        className="image-responsive"
                        src={dummyImage}
                        height="400"
                        width="600"
                        alt="Your pet for today"
                    ></img>
                </div>
                <button>Logout</button>
            </div>
        );
    }
}

export default DashComponent;

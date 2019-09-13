/**
 *
 * DashComponent: Handles Login functionality
 *
 */

import React from 'react';
import '../css/Dash.css';

class DashComponent extends React.Component {
    constructor(props) {
        super(props);
        this.componentWillMount = this.componentWillMount.bind(this);
    }
    componentWillMount() {
        // if either one is missing, redirect
        console.log(this.props.username, this.props.token);
        if (!this.props.username || !this.props.token) {
            //window.location.href = '/login';
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
                        width="400"
                        alt="Your pet for today"
                    ></img>
                </div>
            </div>
        );
    }
}

export default DashComponent;

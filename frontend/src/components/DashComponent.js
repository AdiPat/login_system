/**
 *
 * DashComponent: Handles Login functionality
 *
 */

import React from 'react';
import '../css/Dash.css';

class DashComponent extends React.Component {
    componentDidMount() {
        // TODO: check if authentication has happened
        // TODO: query API for data
        console.log(this.props.token);
    }

    render() {
        let dummyImage = 'https://dummyimage.com/600x400/000/fff';
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
